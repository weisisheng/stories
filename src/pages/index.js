import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import Slider from '../components/slider'
import Social from '../components/social'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    <div className="site">
      <Main />
      <Slider />
    </div>
  </Layout>
)

export default IndexPage
