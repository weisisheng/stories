import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/footer'

import '../styles/stories.css'
export default ({ data }) => {
  const story = data.markdownRemark

  const style = {
    backgroundImage: `url(${story.frontmatter.backgroundImage})`,
  }

  return (
    <div className="story-container" style={style}>
      <h1>{story.frontmatter.title}</h1>
      <h6>{story.frontmatter.story}</h6>
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
        backgroundImage
      }
    }
  }
`
