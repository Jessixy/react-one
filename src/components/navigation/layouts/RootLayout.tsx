import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav className="flex flex-row p-6 px-10 justify-end gap-8 bg-slate-400">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tutorials">Tutorials</NavLink>
          <NavLink to="/teststation">Teststation</NavLink>
          <NavLink to="/features">Features</NavLink>
        </nav>
      </header>
      <main>
        {/* Breadcrumbs */}
        <Breadcrumbs />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
