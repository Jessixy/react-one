import { NavLink, Outlet } from "react-router-dom";

const TutorialsLayout = () => {
  return (
    <div>
      <nav className="flex flex-row p-3 gap-4 flex-grow w-full">
        <div className="flex flex-row p-3 gap-4 w-full">
          <NavLink to="dummyview">Dummy View</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default TutorialsLayout;
