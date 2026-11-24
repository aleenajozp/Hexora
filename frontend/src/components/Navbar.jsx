import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Hexagon, Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navLinks = (className = "") =>
    links.map(({ to, label, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) =>
          `${className} nav-link${isActive ? " is-active" : ""}`
        }
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </NavLink>
    ));

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Hexora Publication home">
          <span className="brand__mark">
            <Hexagon size={33} strokeWidth={1.5} aria-hidden="true" />
            <span>H</span>
          </span>
          <span className="brand__name">
            HEXORA<span>PUBLICATION</span>
          </span>
        </Link>

        <div className="navbar__links">{navLinks()}</div>
        <div className="navbar__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <Button to="/contact" className="navbar__cta">
            Get in Touch
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className="mobile-menu__links">
              {navLinks("mobile-menu__")}
            </div>
            <Button to="/contact">Get in Touch</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
