import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Main from '../components/main'
import Cards from '../components/carousel'
import Social from '../components/social'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    <div className="site">
      <Main />
      <Cards />
    </div>
  </Layout>
)

export default IndexPage
