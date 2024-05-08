import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav className="flex flex-row p-6 px-10 justify-end gap-8 bg-slate-400">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/test-be">Test-BE</NavLink>
          <NavLink to="/various">Miscellaneous</NavLink>
          <NavLink to="/accordion">Accordion</NavLink>
          <NavLink to="/modalone">Modal-One</NavLink>
          <NavLink to="/portal">Portal</NavLink>
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
