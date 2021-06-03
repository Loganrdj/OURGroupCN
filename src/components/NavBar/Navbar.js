import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import { FaAlignJustify } from "react-icons/fa";
import "./nav.css";
import Logo from "./Logo";
import isInBrowser from "./isInBrowser";



function openNav() {

  // console.log(window.location.pathname)
}

// Helper called classNames
// const isBrowser = typeof window !== "undefined";
const Navbar = () => {
  
  const [pathBool, setpathBool] = useState("");
  // componentDidMount(){
  //   if (isBrowser) {
  //     // window = "";
  //   }
  // }
  useEffect(()=> {
    if(isInBrowser) {
      var pathCheck = window.location.pathname;
      if(pathCheck.includes("about")){
        setpathBool("about");
      }
      if(pathCheck.includes("projects")){
        setpathBool("projects");
      }
      
    }
  }, [])
  
  return (
    <div className={pathBool === "about" ? "navbar-background-image" : pathBool === "projects" ? "navbar-background-image-projects" : ""}>
      <div className={pathBool === "about" || pathBool === "projects" ? "navbar green-box" : "navbar"}>
          <div className="nav-links">
            <Link to="/" state={{urlTo: "/"}} className="nav-link" activeClassName="active-link">HOME</Link>
            <Link to="/about" state={{urlTo: "about"}} className="nav-link" activeClassName="active-link">ABOUT</Link>
            <Link to="/projects" state={{urlTo: "projectsWoohoo"}} className="nav-link" activeClassName="active-link">PROJECTS</Link>
            <Link to="/" state={{urlTo: "/"}} id="title"><Logo></Logo></Link>
            <Link to="/research" state={{urlTo: "research"}} className="nav-link" activeClassName="active-link">RESEARCH</Link>
            <Link to="/news" state={{urlTo: "news"}} className="nav-link" activeClassName="active-link">NEWS</Link>
            <Link to="/contact" state={{urlTo: "contact"}} className="nav-link" activeClassName="active-link">CONTACT</Link>
          </div>
          <div>
            <button id="nav-btn-true" onClick={openNav}><FaAlignJustify id="nav-btn"/></button>
          </div>
      </div>
    </div>
  )
}

export default Navbar