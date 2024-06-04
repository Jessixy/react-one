import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const FeaturesLayout = () => {
  return (
    <div>
      <nav className="flex flex-row p-3 gap-4 flex-grow w-full">
        <div className="flex flex-row p-3 gap-4 w-full">
          <NavLink to="usertable">User Tabelle</NavLink>
          <NavLink to="usercards">User Cards</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
