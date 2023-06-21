// import React, { useContext, useEffect, useState, useCallback } from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { ThemeContext } from "../utils/ThemeContext";

// import { FiSun, FiMoon } from "react-icons/fi";
// import { CgMenu, CgClose } from "react-icons/cg";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import CodeGrid from "../pages/CodeGrid";
// import Contact from "../pages/Contact";
// import Loader from "./Loader";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const { theme, handleTheme } = useContext(ThemeContext);

//   const themeButtonClass = `bg-${theme === "dark" ? "light" : "dark"} text-${
//     theme === "dark" ? "dark" : "light"
//   } p-4 rounded-3xl ease-in duration-300`;

//   const hoverClass = `hover:border-b-2 hover:border-appBlack ease-in duration-100 ${
//     theme === "dark" ? "dark:hover:border-white" : ""
//   }`;

//   const mobileNavStyle =
//     "sm:hidden z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen dark:bg-appBlack bg-white dark:text-appWhiteHigh text-center ease-in duration-300";

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     if (theme === "dark") {
//       htmlElement.classList.add("dark");
//     } else {
//       htmlElement.classList.remove("dark");
//     }

//     window.onload = () => {
//       setIsLoading(false);
//     };
//   }, [theme]);

//   const handleNav = useCallback(() => {
//     setNav((prevNav) => !prevNav);
//   }, []);

//   const handleLoading = useCallback(() => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);
//   }, []);

//   return (
//     <Router>
//       <div className="dark:bg-appBlack bg-white fixed w-full z-10 ease-in duration-300">
//         <div className="max-w-[1240px] m-auto flex justify-between items-center px-4">
//           <h1 className="dark:text-white font-bold text-3xl select-none hover:cursor-pointer ease-in duration-300">
//             C CodeGrid
//           </h1>
//           <ul className="dark:text-white hidden sm:flex">
//             <li className="p-4">
//               <Link to="/" onClick={handleLoading} className={hoverClass}>
//                 Home
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link to="/about" onClick={handleLoading} className={hoverClass}>
//                 About
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link
//                 to="/codegrid"
//                 onClick={handleLoading}
//                 className={hoverClass}
//               >
//                 CodeGrid
//               </Link>
//             </li>
//             <li className="p-4">
//               <Link
//                 to="/contact"
//                 onClick={handleLoading}
//                 className={hoverClass}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Dark mode toggler */}
//           <div>
//             <button onClick={handleTheme} className={themeButtonClass}>
//               {theme === "dark" ? (
//                 <FiSun
//                   className="dark:text-appWhiteHigh"
//                   style={{ color: "#ffffff", fontSize: "20px" }}
//                 />
//               ) : (
//                 <FiMoon style={{ fontSize: "20px" }} />
//               )}
//             </button>
//           </div>

//           {/* Mobile */}
//           <div
//             onClick={handleNav}
//             className="block z-2 sm:hidden z-20 hover:cursor-pointer"
//           >
//             {nav ? (
//               <CgClose
//                 size={30}
//                 className="dark:text-appWhiteHigh text-appBlack"
//               />
//             ) : (
//               <CgMenu
//                 size={30}
//                 className="dark:text-appWhiteHigh text-appBlack"
//               />
//             )}
//           </div>

//           <div className={`${mobileNavStyle} ${nav ? "" : "left-[-100%]"}`}>
//             <ul>
//               <li className="p-4 text-3xl hover:text-grey-500">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="p-4 text-3xl hover:text-grey-500">
//                 <Link to="/about">About</Link>
//               </li>
//               <li className="p-4 text-3xl hover:text-grey-500">
//                 <Link to="/codegrid">CodeGrid</Link>
//               </li>
//               <li className="p-4 text-3xl hover:text-grey-500">
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <hr className="border-appBlack dark:border-white" />

//         {isLoading ? (
//           <Loader />
//         ) : (
//           <Routes>
//             <Route exact path="/" Component={Home} />
//             <Route path="/about" Component={About} />
//             <Route path="/codegrid" Component={CodeGrid} />
//             <Route path="/contact" Component={Contact} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default React.memo(Navbar);
