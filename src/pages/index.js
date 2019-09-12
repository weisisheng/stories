import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Main from '../components/main'
import Cards from '../components/cards'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="site">
      <Main />
      <Cards />
    </div>
  </Layout>
)

export default IndexPage
