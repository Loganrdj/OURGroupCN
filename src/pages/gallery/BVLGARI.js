import React from "react";
import {Link} from "gatsby";
import "./../pagestyles.css";
import Layout from "../../components/Layout";
import SimpleSlider from "../../components/Slider";
import styled from "styled-components";
import { graphql } from 'gatsby';

import Img from "gatsby-image";

const IndexCarouselSection = styled.div`
    background-color: white;
    color: #7BC366;
    padding: 6% 14% 8% 14%;
    height: 50%;
    @media only screen and (max-width: 600px) {
        #projects-section-description { //media query
        // font-size: 13px;
        width: 100%;
        }
    }
    .slick-prev:before,
    .slick-next:before {
        color: #7BC366;
    }
`

const ProjectDetailDiv = styled.div`
    margin-top: -80px;
    display: flex;
    flex-direction: row;
    background-color: #7BC366;
    justify-content: center;
    .project-description-div {
      margin-left: 10%;
      width: 28%;
      position: -webkit-sticky;
      position: sticky;
      top: 20px;
      color: white;
      font-size: .6rem;
      p {
        margin-bottom: 5%;
      }
      .project-title-strong {
        margin-bottom: -3%;
        font-weight: bold;
      }
    }
    .project-body-div {
      width: 100%;
      justify-content: center;
      margin-left: 7%;
      margin-right: 14%;
      color: white;
    }
    .split-image-div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .project-image {
        width: 47%;
      }
    }
    .project-image {
      margin-bottom: 5%;
    }
`

const projectOne = (data) => {

  const currentPage = data.data.site.siteMetadata.portfolioData[0];
  const currentPageImages = data.data.allFile;

  return(
    <Layout>
      <ProjectDetailDiv>
        <div className="project-description-div">
          <h6>{currentPage.name}</h6>
          <p className="project-title-strong">Owner:</p>
          <p>{currentPage.owner}</p>
          <p className="project-title-strong">Scale: </p>
          <p>{currentPage.scale}</p>
          <p className="project-title-strong">Location:</p>
          <p>{currentPage.location}</p>
        </div>
        
        <div className="project-body-div">
          <div>
            <Img className="project-image" fluid={currentPageImages.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <p>{currentPage.summary}</p>
          <div className="split-image-div">
            <Img className="project-image" fluid={currentPageImages.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
            <Img className="project-image" fluid={currentPageImages.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <p>{currentPage.secondDescription}</p>
          <div>
            <Img className="project-image" fluid={currentPageImages.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
          <div>
            <Img className="project-image" fluid={currentPageImages.edges[0].node.childImageSharp.fluid} alt="This is a placeholder building image" />
          </div>
        </div>
      </ProjectDetailDiv>
      <IndexCarouselSection>
      <div id="projects-carousel-wrapper">
          <h2 id="projects-section-description">SOME OF OUR OTHER PROJECTS</h2>
          <Link to="/projects" id="project-page-carousel-link">View All ›</Link>
      </div>
      <SimpleSlider></SimpleSlider>
      </IndexCarouselSection>
    </Layout>
)}
  
export default projectOne

export const query = graphql`
query projectOneQuery {
  allFile(filter: {relativeDirectory: {glob: "Project-1-*"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  site(siteMetadata: {}) {
    siteMetadata {
      portfolioData {
        name
        owner
        scale
        type
        work
        location
        designperiod
        summary
        firstDescription
        secondDescription
      }
    }
  }
}
`