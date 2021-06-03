import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

export default function Logo() {

  return (
    <StaticQuery query={graphql`
      query LogoWhiteQuery {
        file(relativePath: {eq: "OURGroupLogoWhite.png"}) {
          childImageSharp {
            fixed(height: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `} render={data => (
      <Img fixed={data.file.childImageSharp.fixed} />
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