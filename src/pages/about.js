import React from "react";
import "./pagestyles.css";
import Layout from "../components/Layout";
import LogoGreenAbout from "../components/NavBar/LogoGreenAbout";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from 'gatsby';
import { Container, Row, Col } from "react-bootstrap";

const AboutBoxDiv1 = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    div {
        height: 200px;
        width: 300px;
        // padding: 10% 20% 10% 20%;
    }
`
const AboutBoxDiv2 = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-left: 8%;
    padding-right: 20%;
`
const AboutBoxDiv3 = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-flow: wrap;
    padding-right: 8%;
    text-align: right;
    padding-left: 20%;
    p {
        color: white;
        font-size: .7em;
    }
`
const AboutBoxDiv5 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    // height: 110vh;
    // div {
    //     display: flex;
    //     flex-flow: row wrap;
    //     width: 100%;
    //     height: 100%;
    //     justify-content: space-evenly;
    //     div {
    //         margin-right: 50px;
    //         margin-left: 50px;
    //     }
    // }
    h1 {
        color: #7BC366;
        margin-bottom: 100px;
        margin-top: 100px;
    }
    .container {
        .row {
            margin-bottom: 150px !important;
            @media only screen and (max-width: 768px) {
                margin-bottom: 40px !important;
            }
            @media only screen and (max-width: 600px) {
                margin-bottom: 20px !important;
            }
        }
    }
    
`
const AboutBoxDiv6 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-top: 8%;
`

const About = (props) => (
    <Layout>
        <div className="about-layer-div">
            <div id="about-box-div-1" className="about-box">
                <AboutBoxDiv1>
                    <div>
                        <LogoGreenAbout></LogoGreenAbout>
                    </div>
                </AboutBoxDiv1>
            </div>
            <div id="about-box-div-2" className="about-box">
                <AboutBoxDiv2>
                    <h1>URBAN RENEWAL REDEFINED.</h1>
                    <p>OUR (Office for Urban Renewal) Group is a professional architecture firm that specializes in research and practice in the fields of Chinese heritage protection and urban renewal. We integrate asset management-thinking into our design and technology to form a service model with planning design and engineering technology consulting at its core. OUR Group’s project consultants are experts in business planning, and work to achieve the perfect mixture of cultural inheritance, asset appreciation, and branding for the project. Founded by a master of heritage protection from Tongji University, Shanghai Urban Renewal Industry Co., Ltd. was founded and registered in 2014. To date, OUR Group has 1 invention patent and 31 utility model patents. In 2017, we were recognized as a national high-tech enterprise. Over 31% of the total number of our company’s employees hold masters and doctorates from international universities, and over 20 of which hold director and senior titles in architecture, planning, structure, and mechanical and electrical engineering.</p>
                </AboutBoxDiv2>
            </div>
        </div>
        <div className="about-layer-div">
            <div id="about-box-div-3" className="about-box">
                <AboutBoxDiv3>
                    <h1>COMPANY HISTORY</h1>
                    <p>Based in Shanghai, OUR Group has established multiple branches and offices in Nanjing, Qingdao, Chengdu and other cities to provide research and evaluation, positioning planning, planning and design, engineering for the protection and renewal of Chinese heritage, the renovation of existing buildings, and cultural tourism projects.</p>
                    <p>Since our establishment, OUR Group has successively completed more than 300 projects, including historical building repairs, architectural renovations, and district renewal. We have repeatedly won the Design Excellence Award of the Architectural Society of China and the Shanghai Architectural Society, as well as many other industry awards.  </p>
                </AboutBoxDiv3>
            </div>
            <div id="about-box-div-4" className="about-box">
                <div>
                    <Img fluid={props.data.background.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
                </div>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-5">
                <AboutBoxDiv5>
                    <h1>CLIENTS</h1>
                    <Container>
                        <Row class="logo-row">
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                        </Row>
                        <Row class="logo-row">
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                <div class="logo-div">
                                    <Img fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                        </Row>
                        <Row class="logo-row">
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div non-display">
                                    <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div non-display">
                                    <Img fixed={props.data.logos.edges[0].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div non-display">
                                    <Img fixed={props.data.logos.edges[1].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3} xl={3}>
                                <div class="logo-div non-display">
                                    <Img fixed={props.data.logos.edges[2].node.childImageSharp.fixed} alt="This is a placeholder building image" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </AboutBoxDiv5>
            </div>
        </div> 
        <div className="about-layer-div">
            <div id="about-box-div-6" className="about-box">
                <AboutBoxDiv6>
                    <h1>GET IN TOUCH ›</h1>
                    <p>QUESTIONS? COMMENTS? GIVE US A CALL.</p>
                </AboutBoxDiv6>
            </div>
        </div> 
    </Layout>
)
  
export default About

export const query = graphql`
  query sectionBackground {
    background: allFile(filter: {relativePath: {glob: "about/background*"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    logos: allFile(filter: {relativePath: {glob: "about/logo*"}}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 150, height: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
  }
`