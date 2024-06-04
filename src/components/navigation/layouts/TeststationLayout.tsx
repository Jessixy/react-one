import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const TeststationLayout = () => {
  return (
    <div>
      <nav className="flex flex-row p-3 gap-4 flex-grow w-full">
        <div className="flex flex-row p-3 gap-4 w-full">
          <NavLink to="testview">Test Components View</NavLink>
          <NavLink to="accordion">Accordion</NavLink>
          <NavLink to="accordion">Accordion</NavLink>
          <NavLink to="modal-one">Modal-One</NavLink>
          <NavLink to="portal">Portal</NavLink>
          <NavLink to="miscellaneous">Miscellaneous</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
