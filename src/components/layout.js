/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import "./layout.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
      {/* <div id="green-box">
        <div className="navbar">
            <div className="nav-links">
              <Link to="/" state={{urlTo: "/"}} className="nav-link" activeClassName="active-link">HOME</Link>
              <Link to="/about" state={{urlTo: "about"}} className="nav-link" activeClassName="active-link">ABOUT</Link>
              <Link to="/projects" state={{urlTo: "projects"}} className="nav-link" activeClassName="active-link">PROJECTS</Link>
              <Link to="/" state={{urlTo: "/"}} id="title"><Logo></Logo></Link>
              <Link to="/research" state={{urlTo: "research"}} className="nav-link" activeClassName="active-link">RESEARCH</Link>
              <Link to="/news" state={{urlTo: "news"}} className="nav-link" activeClassName="active-link">NEWS</Link>
              <Link to="/contact" state={{urlTo: "contact"}} className="nav-link" activeClassName="active-link">CONTACT</Link>
            </div>
            <div>
              <button id="nav-btn-true"><FaAlignJustify id="nav-btn"/></button>
            </div>
        </div>
      </div> */}
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
