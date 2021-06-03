import React from "react";
import { Link, graphql } from "gatsby";
import "./pagestyles.css";
import Layout from "../components/Layout";
// import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";


// const IndexCarouselSection = styled.div`
//     background-color: white;
//     color: #7BC366;
//     padding: 6% 14% 8% 14%;
//     height: 50%;
//     @media only screen and (max-width: 600px) {
//         #projects-section-description { //media query
//         // font-size: 13px;
//         width: 100%;
//         }
//     }
//     .slick-prev:before,
//     .slick-next:before {
//         color: #7BC366;
//     }
// `
// const projectsGallery = styled.div`
//     display: flex;
// `

const Projects = (props) => (
    <Layout>
        <Container>
            <Row>
                <h1 className="margin-up">PROJECTS</h1>
            </Row>
            <Row className="projects-row">
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Link to="/gallery/BVLGARI">
                        <Img className="grayscale-image" fluid={props.data.Project1.childImageSharp.fluid} alt="This is a placeholder building image"/>
                    </Link>
                    <h6>上海总商会（宝格丽酒店BVLGARI HOTEL）</h6>
                    <p>华侨城  OCT Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Link to="/gallery/LanLingDistrict">
                        <Img className="grayscale-image" fluid={props.data.Project2.childImageSharp.fluid !== undefined ? props.data.Project2.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    </Link>
                    <h6>武汉兰陵片区更新项目</h6>
                    <p>武汉旅游发展投资集团有限公司</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project3.childImageSharp.fluid !== undefined ? props.data.Project3.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>南京百子亭历史街区</h6>
                    <p>南京中山集团/瑞安集团</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project4.childImageSharp.fluid !== undefined ? props.data.Project4.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>日照国医坛奥莱城</h6>
                    <p>山东国医坛国际养生城</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project5.childImageSharp.fluid !== undefined ? props.data.Project5.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>上海苏河湾片区开发</h6>
                    <p>城市设计业主单位：华侨城集团有限公司</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project6.childImageSharp.fluid !== undefined ? props.data.Project6.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>泰来坊及统益里片区更新</h6>
                    <p>上海西部企业（集团）有限公司</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project7.childImageSharp.fluid !== undefined ? props.data.Project7.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>上海外滩源</h6>
                    <p>新黄浦集团</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project8.childImageSharp.fluid !== undefined ? props.data.Project8.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>西安纺织城</h6>
                    <p>西安常乐城市发展有限公司</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project9.childImageSharp.fluid !== undefined ? props.data.Project9.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>武汉咸安坊历史建筑修缮</h6>
                    <p>华发集团 Huafa Group</p>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Img className="grayscale-image" fluid={props.data.Project10.childImageSharp.fluid !== undefined ? props.data.Project10.childImageSharp.fluid : ""} alt="This is a placeholder building image"/>
                    <h6>上海张园地区保护性综合开发</h6>
                    <p>华润集团</p>
                </Col>
            </Row>
        </Container>
    </Layout>
)
  
export default Projects

export const query = graphql`
query projectsPage {
    Project1: file(
        relativeDirectory: {glob: "Project-1-*"}, 
        name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project2: file(
      relativeDirectory: {glob: "Project-2-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project3: file(
      relativeDirectory: {glob: "Project-3-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project4: file(
      relativeDirectory: {glob: "Project-4-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project5: file(
      relativeDirectory: {glob: "Project-5-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project6: file(
      relativeDirectory: {glob: "Project-6-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project7: file(
      relativeDirectory: {glob: "Project-7-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project8: file(
      relativeDirectory: {glob: "Project-8-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project9: file(
      relativeDirectory: {glob: "Project-9-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Project10: file(
      relativeDirectory: {glob: "Project-10-*"}
      name: {glob: "display*"}
    ) {
      childImageSharp {
        fluid(maxWidth: 250, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`  