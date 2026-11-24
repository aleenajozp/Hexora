import { ArrowUpRight, BriefcaseBusiness, Camera, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

const serviceLinks = [
  ["Web Development", "web-development"],
  ["App Development", "mobile-app-development"],
  ["UI/UX Design", "ui-ux-design"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" to="/">
              <span className="brand__mark">
                <Hexagon size={31} strokeWidth={1.5} aria-hidden="true" />
                <span>H</span>
              </span>
              <span className="brand__name">
                HEXORA<span>PUBLICATION</span>
              </span>
            </Link>
            <p>
              We bring creativity and technology together to make meaningful
              digital experiences.
            </p>
            <div className="footer-socials" aria-label="Social media">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={17} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Camera size={17} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-column">
            <h2>What we do</h2>
            {serviceLinks.map(([label, id]) => (
              <Link key={id} to={`/#${id}`}>
                {label}
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="footer-note">
            <span className="eyebrow">Have a good one in mind?</span>
            <Link to="/contact">
              Let&apos;s make it real{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Hexora Publication. All rights
            reserved.
          </span>
          <span>Ideas into impact.</span>
        </div>
      </div>
    </footer>
  );
}
