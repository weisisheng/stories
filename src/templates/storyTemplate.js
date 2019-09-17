import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/footer'
import Img from 'gatsby-image'
import SEO from '../components/seo'
import PlayShare from '../components/playShare'
import TransitionButtons from '../components/transitionButtons'
import ReadMore from '../components/readMore'
import logoSmall from '../images/logo-small.png'
import '../styles/stories.css'

export default ({ data, pageContext }) => {
  const story = data.markdownRemark
  const { next, prev } = pageContext
  const bgImage = story.frontmatter.backgroundImage.childImageSharp.fluid
  const videoImage = story.frontmatter.videoImage.childImageSharp.fluid
  const modalImage = story.frontmatter.modalImage.childImageSharp.fluid

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
            <img className="story-logo" src={logoSmall} alt="RMHP Logo" />
          </Link>
          <h3 className="title we-protect">We Protect</h3>
          <h1 className="title">{story.frontmatter.title}</h1>
          <PlayShare
            to={`${story.frontmatter.path}/video`}
            share={story.frontmatter.path}
          />
          <p>{story.frontmatter.story}</p>

          {story.frontmatter.name === 'Javier' ||
          story.frontmatter.name === 'Andy' ? (
            <ReadMore
              name={story.frontmatter.name}
              story={story.frontmatter.story}
              modalImage={modalImage}
              title={story.frontmatter.title}
            />
          ) : null}
        </div>
        <div className="story-video">
          <Img
            fluid={videoImage}
            className="story-video-image"
            alt={story.frontmatter.name}
          />
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
