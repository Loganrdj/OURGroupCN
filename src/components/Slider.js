import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledImage = styled.div`
    border-radius: 1rem;
    padding-right: 10px;
    max-width: 80rem;
    margin: 0 auto;
    margin-top: 30px;
    // margin-bottom: 2rem;
    /* Extra large TV screens */
    @media screen and (min-width: 1200px) { 
        
    }
    /* Desktops, large screens */
    @media screen and (max-width: 1200px) { 
        
    }
    /* Small screens, laptops */
    @media screen and (max-width: 1024px) { 

    }
    /* iPads & Tablets */
    @media screen and (max-width: 768px) { 
      margin-top: 0px;
    }
    /* Mobile */
    @media screen and (max-width: 480px) { 
      margin-top: 0px;
    }
  `;



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
      
        <StaticQuery query={graphql`
          query carouselIndexQuery {
            allFile(filter: {relativeDirectory: {glob: "Project-*"}} sort: {fields: relativeDirectory}) {
              edges {
                node {
                  childImageSharp {
                    fluid(maxWidth: 1000, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
            `} 
            render={data => {
              const imageDivs = data.allFile.edges.map(image => {
                return (
                  <div>
                    <StyledImage>
                      <Img fluid={image.node.childImageSharp.fluid} alt="project image alt"/>
                    </StyledImage>
                  </div>
                )
              })

              return(
                <Slider {...settings}>
                    { imageDivs }
                </Slider>
            )}}
        />
    );
  }