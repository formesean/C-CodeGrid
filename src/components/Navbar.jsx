import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";

import { FiSun, FiMoon } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

import Home from "../pages/Home";
import CodeGrid from "../pages/CodeGrid";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Loader from "./Loader";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, handleTheme } = useContext(ThemeContext);

  const themeButtonClass = `bg-${theme === "dark" ? "light" : "dark"} text-${
    theme === "dark" ? "dark" : "light"
  } p-4 rounded-3xl ease-in duration-300`;

  const hoverClass = `hover:border-b-2 hover:border-appBlack ease-in duration-100 ${
    theme === "dark" ? "dark:hover:border-white" : ""
  }`;

  const mobileNavStyle =
    "sm:hidden z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen dark:bg-appBlack bg-white dark:text-appWhiteHigh text-center ease-in duration-300";

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    window.onload = () => {
      setIsLoading(false);
    };
  }, [theme]);

  const handleNav = useCallback(() => {
    setNav((prevNav) => !prevNav);
  }, []);

  const handleLinkClick = useCallback(() => {
    if (nav) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      setNav(false);
    }
  }, [nav]);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Router>
      <div className="dark:bg-appBlack bg-white fixed w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center px-4">
          <h1 className="dark:text-white font-bold text-3xl select-none hover:cursor-pointer ease-in duration-300">
            C CodeGrid
          </h1>
          <ul className="dark:text-white hidden sm:flex">
            <li className="p-4">
              <NavLink
                to="/"
                onClick={handleClick}
                className={hoverClass}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive
                      ? "2px solid " + (theme === "dark" ? "white" : "black")
                      : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/codegrid"
                onClick={handleClick}
                className={hoverClass}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive
                      ? "2px solid " + (theme === "dark" ? "white" : "black")
                      : "",
                  };
                }}
              >
                CodeGrid
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/about"
                onClick={handleClick}
                className={hoverClass}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive
                      ? "2px solid " + (theme === "dark" ? "white" : "black")
                      : "",
                  };
                }}
              >
                About
              </NavLink>
            </li>
            <li className="p-4">
              <NavLink
                to="/contact"
                onClick={handleClick}
                className={hoverClass}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive
                      ? "2px solid " + (theme === "dark" ? "white" : "black")
                      : "",
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Dark mode toggler */}
          <div>
            <button onClick={handleTheme} className={themeButtonClass}>
              {theme === "dark" ? (
                <FiSun
                  className="dark:text-appWhiteHigh"
                  style={{ color: "#ffffff", fontSize: "20px" }}
                />
              ) : (
                <FiMoon style={{ fontSize: "20px" }} />
              )}
            </button>
          </div>

          {/* Mobile */}
          <div
            onClick={handleNav}
            className="block z-2 sm:hidden z-20 hover:cursor-pointer"
          >
            {nav ? (
              <CgClose
                size={30}
                className="dark:text-appWhiteHigh text-appBlack"
              />
            ) : (
              <CgMenu
                size={30}
                className="dark:text-appWhiteHigh text-appBlack"
              />
            )}
          </div>

          <div className={`${mobileNavStyle} ${nav ? "" : "left-[-100%]"}`}>
            <ul>
              <li className="p-4 text-3xl hover:text-grey-500">
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid " + (theme === "dark" ? "white" : "black")
                        : "",
                    };
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="p-4 text-3xl hover:text-grey-500">
                <NavLink
                  to="/codegrid"
                  onClick={handleLinkClick}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid " + (theme === "dark" ? "white" : "black")
                        : "",
                    };
                  }}
                >
                  CodeGrid
                </NavLink>
              </li>
              <li className="p-4 text-3xl hover:text-grey-500">
                <NavLink
                  to="/about"
                  onClick={handleLinkClick}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid " + (theme === "dark" ? "white" : "black")
                        : "",
                    };
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="p-4 text-3xl hover:text-grey-500">
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive
                        ? "2px solid " + (theme === "dark" ? "white" : "black")
                        : "",
                    };
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-appBlack dark:border-white" />

        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/codegrid" Component={CodeGrid} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default React.memo(Navbar);
