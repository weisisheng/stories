import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import aaron from '../people/aaron.png'

import SliderItem from './sliderItem'
import '../styles/slider.css'

const Slider = () => {
  const people = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "people" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                src
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
      // animationSpeed={1500}
      infinite
      arrowLeft={
        <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} />
      }
      arrowRight={
        <FontAwesomeIcon className="arrow-right" icon={faChevronRight} />
      }
      addArrowClickHandler
    >
      {people.allFile.edges.map(person => (
        <SliderItem
          key={person.node.childImageSharp.fluid.src}
          name={person.node.name}
          src={person.node.childImageSharp.fluid.src}
        />
      ))}
    </Carousel>
  )
}

export default Slider
