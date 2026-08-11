import Socials from "../../components/Socials";
import "./Footer.css";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="footer">
				<Socials />
				<p className="footer-meta">
					<span>&copy; {year}</span>
					<span>David Aronmwan, Software Engineer</span>
				</p>
			</div>
		</footer>
	);
}
