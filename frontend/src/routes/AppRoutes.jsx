import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const About = lazy(() =>
  import("../pages/About.jsx").then((module) => ({ default: module.About })),
);
const Contact = lazy(() =>
  import("../pages/Contact.jsx").then((module) => ({
    default: module.Contact,
  })),
);
const Home = lazy(() =>
  import("../pages/Home.jsx").then((module) => ({ default: module.Home })),
);

export function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="route-loading" role="status">
          Loading page…
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
