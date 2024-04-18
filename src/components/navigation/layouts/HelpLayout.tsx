import { Outlet } from "react-router";

const HelpLayout = () => {
  return (
    <div>
      <nav className="flex flex-row p-3 justify-between items-center gap-4 flex-grow">
        <h2>Help</h2>
        {/* <div className="flex flex-row p-3 justify-end items-center gap-4">
          <NavLink to="faq">View the FAQ</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </div> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
