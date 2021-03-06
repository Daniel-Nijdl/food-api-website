import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../util/consts";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const checkSize = () => {
    if (window.innerWidth >= 768) {
      setShowLinks(true);
    }
    if (window.innerWidth < 768) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            Food Data
          </a>
          <button className="nav-toggle" onClick={toggleLinks}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {links
              .filter(
                (link) => link.text !== "Error" && link.text !== "Landing"
              )
              .map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} className="keyList">
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
