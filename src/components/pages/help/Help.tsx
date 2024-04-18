import { Outlet } from "react-router";

const Help = () => {
  return (
    <div className="help-layout">
      <nav className="flex flex-row p-3 justify-between items-center gap-4">
        <h2>Website Help</h2>
        {/* <div className="flex flex-row p-3 justify-end items-center gap-4">
          <NavLink to="faq">View the FAQ</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </div> */}
      </nav>

      <Outlet />
    </div>
  );
};

export default Help;
