import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Social from '../components/social'
import SEO from '../components/seo'

import '../styles/video.css'

export default ({ data }) => {
  const story = data.markdownRemark
  const screenSize = useWindowSize() //custom hook -- see below
  const prevPath = story.frontmatter.name.toLowerCase()

  useEffect(() => {
    const touch =
      (() => {
        document.addEventListener('touchstart', {})
      },
      1000)
    return () => document.removeEventListener(touch)
  }, [])

  return (
    <div className="video-container">
      <SEO title={`${story.frontmatter.name} Video`} />
      <Link to={`/${prevPath}/`} className="video-back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      {/* <div className="video-wrapper">
        <iframe
          preload="yes"
          src="https://player.vimeo.com/video/361907240?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="video-wrapper">
        <iframe
          title={story.frontmatter.name}
          controls={true}
          preload="yes"
          src={
            screenSize.width < 1024
              ? `${story.frontmatter.videoSourceURL}?autoplay=1&loop=0&byline=0&title=0&muted=1`
              : `${story.frontmatter.videoSourceURL}?autoplay=1&loop=0&byline=0&title=0`
          }
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
      <Social display="block" />
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
        videoSourceURL
      }
    }
  }
`

function useWindowSize() {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}
