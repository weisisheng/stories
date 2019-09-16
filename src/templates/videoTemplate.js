import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Social from '../components/social'
import SEO from '../components/seo'

import '../styles/video.css'

export default ({ data, pageContext }) => {
  const story = data.markdownRemark

  return (
    <div className="video-container">
      <SEO title={`${story.frontmatter.name} Video`} />
      {/* <FontAwesomeIcon className="" icon={faChevronLeft} /> */}
      <Social />
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
      }
    }
  }
`
