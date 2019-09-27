import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import Slider from '../components/slider'
import Social from '../components/social'
import MobileShare from '../components/mobileShare'

import '../styles/index.css'
import bgImage from '../images/home-bg-image.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Social />
      <MobileShare />
      <video
        className="home-video"
        poster={bgImage}
        preload="yes"
        autoPlay
        muted
        loop
        width="100%"
        height="auto"
      >
        <source
          // src="https://player.vimeo.com/external/361907240.hd.mp4?s=f6953334671e6c18dfc846e68a963dc116dc16d0&profile_id=174"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="site">
        <Main />
        <Slider />
      </div>
    </Layout>
  )
}

export default IndexPage
