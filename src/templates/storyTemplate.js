import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/footer'
import Img from 'gatsby-image'
import PlayShare from '../components/playShare'

import '../styles/stories.css'
export default ({ data }) => {
  const story = data.markdownRemark

  const bgImage = story.frontmatter.backgroundImage.childImageSharp.fluid

  return (
    <div className="story-container">
      <Img fluid={bgImage} className="story-bg-image" />
      <div className="image-overlay"></div>
      <div className="story-content">
        <div className="story-text">
          <h2 className="title we-protect">We Protect</h2>
          <h1 className="title">{story.frontmatter.title}</h1>
          <PlayShare />
          <p>{story.frontmatter.story}</p>
        </div>
        <div className="story-video">
          <iframe style={{ display: 'none' }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        name
        title
        story
        videoSourceURL
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
