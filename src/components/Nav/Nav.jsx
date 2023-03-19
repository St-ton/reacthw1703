import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  const isActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <nav className={s.nav}>
      <NavLink className={isActive} to="/">
        All Posts
      </NavLink>
      <NavLink className={isActive} to="/addpost">
        Add Post
      </NavLink>
    </nav>
  );
}
