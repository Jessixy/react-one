import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav className="flex flex-row p-6 justify-end gap-8 bg-slate-400">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/accordion">Accordion</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
      </header>
      <Breadcrumbs />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
