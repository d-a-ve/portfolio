import Socials from "../../components/Socials";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear().toString();
  return (
    <footer>
      <div className="footer">
        <Socials />
        <p>&copy; Copyright {year} David A.</p>
      </div>
    </footer>
  );
}
