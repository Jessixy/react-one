import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const FeaturesLayout = () => {
  return (
    <div>
      <nav className="flex flex-row p-3 justify-between items-center gap-4 flex-grow">
        <div className="flex flex-row p-3 justify-end items-center gap-4">
          <NavLink to="usertable">User Tabelle</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
