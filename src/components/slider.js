import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import aaron from '../images/people/aaron.png'

import SliderItem from './sliderItem'
import '../styles/slider.css'

{
  allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{eq:"photos"}}) {
    edges {
      node {
        childImageSharp {
          sizes(maxWidth: 2000) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
}

const Slider = () => {
  return (
    <Carousel
      className="slider"
      itemWidth={225}
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
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
      <SliderItem src={aaron} />
    </Carousel>
  )
}

export default Slider
