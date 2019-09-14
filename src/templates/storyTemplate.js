import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer'
import Img from 'gatsby-image'
import SEO from '../components/seo'

import PlayShare from '../components/playShare'
import TransitionButtons from '../components/transitionButtons'
import logoSmall from '../images/logo-small.png'
import '../styles/stories.css'

export default ({ data, pageContext }) => {
  const story = data.markdownRemark

  const { next, prev } = pageContext
  console.log(next, prev)
  const bgImage = story.frontmatter.backgroundImage.childImageSharp.fluid
  const videoImage = story.frontmatter.videoImage.childImageSharp.fluid

  return (
    <div className="story-container">
      <SEO title={story.frontmatter.name} />
      <Img
        fluid={bgImage}
        className="story-bg-image"
        alt={story.frontmatter.name}
      />
      <div className="image-overlay"></div>
      <div className="story-content">
        <div className="story-text">
          <Link to="/">
            <img className="story-logo" src={logoSmall} />
          </Link>
          <h2 className="title we-protect">We Protect</h2>
          <h1 className="title">{story.frontmatter.title}</h1>
          <PlayShare />
          <p>{story.frontmatter.story}</p>
        </div>
        <div className="story-video">
          <Img
            fluid={videoImage}
            className="story-video-image"
            alt={story.frontmatter.name}
          />
          <h4>{story.frontmatter.name}</h4>
          <button className="story-video-button">
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
      <TransitionButtons next={next.fields.slug} prev={prev.fields.slug} />
      <Footer />
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
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videoImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
