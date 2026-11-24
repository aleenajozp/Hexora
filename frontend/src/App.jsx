import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { useTheme } from "./hooks/useTheme.js";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return undefined;
    }

    let attempts = 0;
    let frame;
    const scrollToTarget = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 60) {
        attempts += 1;
        frame = window.requestAnimationFrame(scrollToTarget);
      }
    };

    frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
