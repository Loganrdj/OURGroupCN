import React from "react";
import "./footer.css";
import styled from "styled-components";
import { Link } from "gatsby";
import LogoGreen from "../NavBar/LogoGreen";

const FooterWrap = styled.div`
    padding-top: 3%;
    padding-bottom: 2%;
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 13%;
    padding-right: 14%;
    background-color: rgb(248,248,255);
    font-family: "ITCKabelStd-Book";
    #address-title {
        font-family: "ITCKabelStd-Demi";
    }
    #contact-title {
        font-family: "ITCKabelStd-Demi";
    }
    #footer-links {
        font-family: "ITCKabelStd-Demi";
        justify-content: space-evenly;
    }
    
    /* Extra large TV screens */
    @media screen and (min-width: 1200px) { 
        
    }
    /* Desktops, large screens */
    @media screen and (max-width: 1200px) { 
        
    }
    /* Small screens, laptops */
    @media screen and (max-width: 1024px) { 
        #footer-logo {
            display: none;
        }
        justify-content: center;
        align-items: flex-start
    }
    /* iPads & Tablets */
    @media screen and (max-width: 768px) { 
        #footer-logo {
            display: none;
        }
        justify-content: center;
        align-items: flex-start
    }
    /* Mobile */
    @media screen and (max-width: 480px) { 
        #footer-logo {
            display: none;
        }
        justify-content: center;
        align-items: flex-start;
    }
`

const Footer = () => {
    return (
        <>
            <FooterWrap>
                <div id="footer-logo">
                    <LogoGreen></LogoGreen>
                </div>
                <div id="footer-links">
                    <Link to="/about" className="footer-link" activeClassName="active-link">ABOUT US</Link>
                    <Link to="/projects" className="footer-link" activeClassName="active-link">PROJECTS</Link>
                    <Link to="/research" className="footer-link" activeClassName="active-link">RESEARCH</Link>
                    <Link to="/news" className="footer-link" activeClassName="active-link">NEWS</Link>
                    <Link to="/contact" className="footer-link" activeClassName="active-link">CONTACT US</Link>
                </div>
                <div id="address-div">
                    <p id="address-title"><strong>公司地址</strong></p>
                    <p id="address-info">上海市杨浦区平凉路2241号智慧坊7号楼</p>
                </div>
                <div id="contact-div">
                    <p id="contact-title"><strong>Contact Us</strong></p>
                    <p id="contact-info">Occaecat anim amet laborum magna officia ipsum.</p>
                </div>
            </FooterWrap>
        </>
    )
}

export default Footer