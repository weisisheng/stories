import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Footer from '../components/footer'
import MobileFooter from '../components/mobileFooter'
import IpadFooter from '../components/ipadFooter'

import Img from 'gatsby-image'
import SEO from '../components/seo'
import PlayShare from '../components/playShare'
import TransitionButtons from '../components/transitionButtons'
import ReadMore from '../components/readMore'
import logoSmall from '../images/logo-small.png'
import logo from '../images/logo.png'
import '../styles/stories.css'

export default ({ data, pageContext }) => {
  const story = data.markdownRemark
  const { next, prev } = pageContext
  const bgImage = story.frontmatter.backgroundImage.childImageSharp.fluid
  const videoImage = story.frontmatter.videoImage.childImageSharp.fluid
  const modalImage = story.frontmatter.modalImage.childImageSharp.fluid
  const name = story.frontmatter.name.toLowerCase()

  return (
    <div className="story-container">
      <SEO title={story.frontmatter.name} />
      <Img
        fluid={bgImage}
        className={`${name}-story-bg-image story-bg-image`}
        alt={name}
      />
      <div className="image-overlay"></div>
      <div className="story-content">
        <Link to="/" className="mobile-logo">
          <img src={logo} alt="RMHP Logo" />
        </Link>
        <div className="story-text">
          <Link to="/" className="story-logo">
            <img src={logoSmall} alt="RMHP Logo" />
          </Link>
          <h3 className="title we-protect">We Protect</h3>
          <h1 className="title">{story.frontmatter.title}</h1>
          <PlayShare
            to={`${story.frontmatter.path}/video`}
            share={story.frontmatter.path}
          />
          <div
            className="story-html"
            dangerouslySetInnerHTML={{ __html: story.html }}
          />

          {name === 'javier' || name === 'andy' ? (
            <ReadMore
              name={name}
              story={story.html}
              modalImage={modalImage}
              title={story.frontmatter.title}
            />
          ) : null}
        </div>
        <div className="story-video">
          <Link
            to={`${story.frontmatter.path}/video`}
            className="story-video-image"
          >
            <Img fluid={videoImage} alt={name} />
          </Link>
          <h4>{story.frontmatter.name}</h4>
          <Link
            to={`${story.frontmatter.path}/video`}
            className="story-video-button"
          >
            <FontAwesomeIcon icon={faPlay} />
          </Link>
        </div>
      </div>
      <Link to="/" className="close-story">
        <FontAwesomeIcon icon={faTimes} />
      </Link>
      <TransitionButtons
        next={next.fields.slug}
        prev={prev.fields.slug}
        name={name}
      />
      <Footer display="none" />
      <IpadFooter height="14vh" />
      <MobileFooter height="11vh" />
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
        modalImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
