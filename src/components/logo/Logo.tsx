import { Link } from "@tanstack/react-router";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="David Aronmwan home">
      DA
    </Link>
  );
}
