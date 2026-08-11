Boolean flags for request lifecycle look harmless until they disagree. You have seen it: `isLoading` true while `isError` is also true because two setters raced.

## Prefer a discriminated union

```ts
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; data: T };

const [state, setState] = useState<RequestState<User>>({
  status: "idle",
});
```

Now impossible states are unrepresentable. The UI becomes a switch on status, and TypeScript narrows the payload for you.

### Rendering becomes obvious

```tsx
if (state.status === "loading") return <Spinner />;
if (state.status === "error") return <Banner>{state.message}</Banner>;
if (state.status === "success") return <Profile user={state.data} />;
return <EmptyState />;
```

- No contradictory flags
- Error messages live next to the error status
- Success data is only available when status is success

> Model the states you actually have, not the toggles that happen to be convenient.
