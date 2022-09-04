import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import getData from "../api/api";
import { IMAGE_PATH } from "../api/constants";

function Navbar() {
  const [navbarData, setNavbarData] = useState([]);
  useEffect(() => {
    getData("navbar?populate=logo").then((data) => {
      setNavbarData(data.data.attributes);
    });
  }, []);

  return (
    <div className={`Navbar Navbar-${navbarData.backgroundColor}`}>
      <div className="container">
        <div className="navbar-wrapper">
          <div className="logo">
            {navbarData.logo && (
              <Link to="/">
                <img
                  src={IMAGE_PATH + navbarData.logo.data.attributes.url}
                  alt="logo"
                />
              </Link>
            )}
          </div>

          <ul>
            <li>
              <Link to="/articles">Articole</Link>
            </li>
            <li>
              <a href="#">Despre mine</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <form>
            <span>
              <input type="text" placeholder={navbarData.searchPlaceholder} />
              <FaSearch className="search-icon" />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
