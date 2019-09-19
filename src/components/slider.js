import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import SliderItem from './sliderItem'
import '../styles/slider.css'

const Slider = () => {
  const people = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___name] }) {
        edges {
          node {
            frontmatter {
              name
              path
              homePageImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Carousel
      className="slider"
      itemWidth={245}
      slidesPerPage={3}
      slidesPerScroll={1}
      infinite
      arrowLeft={
        <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} />
      }
      arrowRight={
        <FontAwesomeIcon className="arrow-right" icon={faChevronRight} />
      }
      addArrowClickHandler
      breakpoints={{
        1024: {
          centered: true,
          arrows: false,
          infinite: true,
        },
        320: {
          itemWidth: 150,
        },
      }}
    >
      {people.allMarkdownRemark.edges.map(person => (
        <SliderItem
          key={person.node.frontmatter.homePageImage.childImageSharp.fluid.src}
          path={person.node.frontmatter.path}
          src={person.node.frontmatter.homePageImage.childImageSharp.fluid.src}
          name={person.node.frontmatter.name}
        />
      ))}
    </Carousel>
  )
}

export default Slider
