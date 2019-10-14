import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Social from '../components/social'
import SEO from '../components/seo'
import andyOgImage from '../images/andy-meta.jpg'

import '../styles/video.css'

export default ({ data }) => {
  const story = data.markdownRemark
  const screenSize = useWindowSize() //custom hook -- see below
  const prevPath = story.frontmatter.name.toLowerCase()
  const ogImage = story.frontmatter.backgroundImage.childImageSharp.fluid.src
  const description = story.excerpt
  const name = story.frontmatter.name.toLowerCase()

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="video-container">
      <SEO
        title={`Life on the Western Slope | ${story.frontmatter.name}`}
        image={name === 'andy' ? andyOgImage : ogImage}
        description={description}
      />
      <Link to={`/${prevPath}/`} className="video-back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="video-wrapper">
        <iframe
          title={story.frontmatter.name}
          preload="yes"
          autoPlay
          src={
            screenSize.width < 1024
              ? `${story.frontmatter.videoSourceURL}?autoplay=1&loop=0&byline=0&title=0&muted=1&controls=1`
              : `${story.frontmatter.videoSourceURL}?autoplay=1&loop=0&byline=0&title=0&controls=1`
          }
          frameBorder="0"
          allowFullScreen={true}
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
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
      excerpt
      frontmatter {
        path
        name
        title
        videoSourceURL
        backgroundImage {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
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
