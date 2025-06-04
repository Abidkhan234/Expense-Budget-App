import React from "react";
import { NavLink } from "react-router";
import logo from "../../public/Images/Expense-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full px-2 pe-3 flex justify-between items-center text-white">
        <div className="self-start">
          <img src={logo} alt="Logo" className="object-cover w-50 h-20" />
        </div>
        <div className="flex items-center justify-center gap-16">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${
                isActive ? "text-[#000]" : "text-[#6B7280]"
              } font-medium sm:text-xl text-lg`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/History"}
            className={({ isActive }) =>
              `${
                isActive ? "text-[#000]" : "text-[#6B7280]"
              } font-medium sm:text-xl text-lg`
            }
          >
            History
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
