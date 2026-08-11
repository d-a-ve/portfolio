import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "./MarkdownContent.css";

type CopyStatus = "idle" | "copied" | "error";

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

function CodeCopyButton({
  getText,
  label = "Copy code",
  className = "",
}: {
  getText: () => string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const copied = status === "copied";

  async function handleCopy() {
    const ok = await copyText(getText());
    setStatus(ok ? "copied" : "error");
    if (ok) {
      window.setTimeout(() => setStatus("idle"), 1600);
    }
  }

  return (
    <button
      type="button"
      className={`md-code__copy ${className}`.trim()}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : label}
    >
      {copied ? (
        <HiOutlineClipboardCheck size={16} aria-hidden="true" />
      ) : (
        <HiOutlineClipboard size={16} aria-hidden="true" />
      )}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function CodeBlock({ children }: { children?: ReactNode }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [selectionCopy, setSelectionCopy] = useState<{
    text: string;
    top: number;
    left: number;
  } | null>(null);
  const [selectionStatus, setSelectionStatus] = useState<CopyStatus>("idle");

  const codeChild = Children.toArray(children).find((child) =>
    isValidElement(child)
  ) as ReactElement<{ className?: string }> | undefined;
  const className = codeChild?.props.className ?? "";
  const language =
    className
      .split(/\s+/)
      .find((part) => part.startsWith("language-"))
      ?.replace("language-", "") ?? "code";

  function getBlockText() {
    return preRef.current?.innerText ?? "";
  }

  async function handleCopySelection() {
    if (!selectionCopy) return;
    const ok = await copyText(selectionCopy.text);
    if (!ok) {
      setSelectionStatus("error");
      return;
    }

    setSelectionStatus("copied");
    window.setTimeout(() => setSelectionStatus("idle"), 1600);
    setSelectionCopy(null);
    window.getSelection()?.removeAllRanges();
  }

  useEffect(() => {
    function onSelectionChange() {
      const block = blockRef.current;
      if (!block) return;

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setSelectionCopy(null);
        return;
      }

      const text = selection.toString();
      if (!text.trim()) {
        setSelectionCopy(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const common = range.commonAncestorContainer;
      const anchorNode =
        common.nodeType === Node.ELEMENT_NODE
          ? (common as Element)
          : common.parentElement;

      if (!anchorNode || !block.contains(anchorNode)) {
        setSelectionCopy(null);
        return;
      }

      if (anchorNode.closest(".md-code__copy, .md-code__selection-copy")) {
        return;
      }

      const rect = range.getBoundingClientRect();
      const blockRect = block.getBoundingClientRect();

      setSelectionCopy({
        text,
        top: rect.top - blockRect.top - 36,
        left: Math.min(
          Math.max(rect.left - blockRect.left + rect.width / 2, 24),
          blockRect.width - 24
        ),
      });
    }

    document.addEventListener("selectionchange", onSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", onSelectionChange);
    };
  }, []);

  return (
    <div className="md-code" ref={blockRef}>
      <div className="md-code__meta">
        <span className="eyebrow">{language}</span>
        <CodeCopyButton getText={getBlockText} />
      </div>
      <pre ref={preRef}>{children}</pre>
      <div className="md-code__footer">
        <CodeCopyButton getText={getBlockText} />
      </div>

      {selectionCopy ? (
        <button
          type="button"
          className="md-code__selection-copy"
          style={{ top: selectionCopy.top, left: selectionCopy.left }}
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={handleCopySelection}
          aria-label={
            selectionStatus === "copied" ? "Copied selection" : "Copy selection"
          }
        >
          {selectionStatus === "copied" ? (
            <HiOutlineClipboardCheck size={15} aria-hidden="true" />
          ) : (
            <HiOutlineClipboard size={15} aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <div className="md-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [
            rehypeHighlight,
            {
              detect: true,
              aliases: {
                tsx: "typescript",
                ts: "typescript",
                jsx: "javascript",
              },
            },
          ],
        ]}
        components={{
          img: ({ src, alt }) => (
            <span className="md-figure">
              <img src={src} alt={alt ?? ""} loading="lazy" />
            </span>
          ),
          pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
          code: ({ className, children, ...props }) => {
            const isBlock =
              typeof className === "string" &&
              (className.includes("language-") || className.includes("hljs"));

            if (!isBlock) {
              return (
                <code className="md-inline-code" {...props}>
                  {children}
                </code>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
