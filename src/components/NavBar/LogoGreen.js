import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, graphql, StaticQuery } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
export default function LogoGreen() {

  return (
    <StaticQuery query={graphql`
      query LogoGreenQuery {
        file(relativePath: {eq: "OURGroupLogoGreen.png"}) {
          childImageSharp {
            fixed(height: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `} render={data => (
      <LogoWrap as={Link} to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </LogoWrap>
    )}
    
    />
  )
}

// export const query = graphql`
//   query MyQuery {
//     file(relativePath: {eq: "OURGroupLogoGreen.png"}) {
//       childImageSharp {
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }

//   `