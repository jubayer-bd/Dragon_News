import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav flex justify-between items-center gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn     flex  gap-2">
        <img src="/user.png" alt="" />
        <Link to={"/auth/login"} className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
