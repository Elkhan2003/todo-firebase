import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <div className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "activeStyle" : undefined)}
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};
