import React, { useEffect } from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import Slider from '../components/slider'
import Social from '../components/social'
import MobileShare from '../components/mobileShare'

import '../styles/index.css'
import '../styles/ie11.css'
import ogImage from '../images/andy-meta.jpg'
import background from '../images/home-bg-image.jpg'

const IndexPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Layout>
      <SEO title="Life on the Western Slope" image={ogImage} />
      <Social />
      <MobileShare />
      <div className="home-video-wrapper">
        <iframe
          style={{
            background: `center / cover no-repeat url(${background})`,
          }}
          title="RMHP Stories Background Video"
          preload="yes"
          src="https://player.vimeo.com/video/361907240?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameBorder="0"
          allowFullScreen={true}
          allowransparency="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <div className="site">
        <Main />
        <Slider />
      </div>
    </Layout>
  )
}

export default IndexPage
