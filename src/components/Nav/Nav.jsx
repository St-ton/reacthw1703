import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const isActive = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="nav">
      <NavLink to="/">All Posts</NavLink>
      <NavLink to="/addpost">Add Post</NavLink>
    </nav>
  );
}
