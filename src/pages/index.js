import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Main from '../components/main'
import Slider from '../components/slider'
import Social from '../components/social'

import '../styles/index.css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home-bg-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const bgImage = data.placeholderImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={bgImage} className="index-bg-image" />
      <div className="index-image-overlay"></div>
      <Social />
      <div className="site">
        <Main />
        <Slider />
      </div>
    </Layout>
  )
}

export default IndexPage
