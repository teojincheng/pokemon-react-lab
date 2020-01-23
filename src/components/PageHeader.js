import React from "react";
import { NavLink } from "react-router-dom";
const PageHeader = () => {
  return (
    <header className="link-margin">
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
};

export default PageHeader;
