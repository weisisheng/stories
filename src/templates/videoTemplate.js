import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Social from '../components/social'
import SEO from '../components/seo'

import '../styles/video.css'

export default ({ data }) => {
  const story = data.markdownRemark

  const prevPath = story.frontmatter.name.toLowerCase()

  return (
    <div className="video-container">
      <SEO title={`${story.frontmatter.name} Video`} />
      <Link to={prevPath} className="video-back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <iframe
        title={`${story.frontmatter.name} Video`}
        allowfullscreen
        className="video-iframe"
        src={story.frontmatter.videoSourceURL}
      ></iframe>
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
