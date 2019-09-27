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
  const screenSize = useWindowSize()

  const prevPath = story.frontmatter.name.toLowerCase()

  return (
    <div className="video-container">
      <SEO title={`${story.frontmatter.name} Video`} />
      <Link to={`/${prevPath}/`} className="video-back-button">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      {screenSize.width < 1024 ? 
      <video controls={true} preload="auto" autoPlay loop muted>
        <source
          src={story.frontmatter.videoSourceURL}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      :
      <video controls={true} preload="auto" autoPlay loop>
        <source
          src={story.frontmatter.videoSourceURL}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>}
      
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
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
