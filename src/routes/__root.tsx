import { Outlet, createRootRoute } from "@tanstack/react-router";
import { IconContext } from "react-icons";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import "./root.css";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <IconContext.Provider value={{ className: "icon-cursor" }}>
      <div className="app-shell">
        <Header />
        <main className="app-shell__main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
