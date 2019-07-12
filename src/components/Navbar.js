import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/" activeStyles={{ color: "red" }} exact>
              HOME
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/brands" activeStyles={{ color: "red" }} exact>
              BRANDS
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/chocolates" activeStyles={{ color: "red" }} exact>
              CHOCOLATES
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login" activeStyles={{ color: "red" }} exact>
              LOGIN
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/signup" activeStyles={{ color: "red" }} exact>
              SIGNUP
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
