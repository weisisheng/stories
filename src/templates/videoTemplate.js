import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Social from '../components/social'
import SEO from '../components/seo'

import '../styles/video.css'

export default ({ data }) => {
  const story = data.markdownRemark

  const prevPath = story.frontmatter.name.toLowerCase()

  return (
    <div className="video-container">
      <SEO title={`${story.frontmatter.name} Video`} />
      <Link to={`/${prevPath}/`} className="video-back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <video
        className="video-iframe"
        controls="true"
        preload="yes"
        autoPlay
        loop
        width="100%"
        height="auto"
      >
        <source src={story.frontmatter.videoSourceURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
