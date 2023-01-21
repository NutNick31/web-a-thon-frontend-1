import React, { useState, useEffect } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const NavOpts = [
  { id: 1, opt: "Home", href: "/" },
  { id: 2, opt: "Applied", href: "/applied" },
  { id: 3, opt: "Posted", href: "/posted" },
  { id: 4, opt: "Profile", href: "/profile" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [logo, setLogo] = React.useState("logo_light");
  const [jobs, setJobs] = useState([]);

  return (
    <nav className="nav">
      <div className="nav_blur"></div>
      <div className="nav_container">
        <div className="nav_logo">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <ul className="nav_links">
          {NavOpts.map((NavOpt) => {
            const { opt, href, id } = NavOpt;
            return (
              <li key={id} className="nav_links_li">
                <Link to={href}>{opt}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
