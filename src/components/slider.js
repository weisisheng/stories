import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import SliderItem from './sliderItem'
import SliderButtons from './sliderButtons'
import '../styles/slider.css'

const Slider = () => {
  return (
    <Carousel
      className="slider"
      slidesPerPage={3}
      slidesPerScroll={1}
      animationSpeed={1500}
      infinite
      arrowLeft={
        <FontAwesomeIcon className="arrow-left" icon={faChevronLeft} />
      }
      arrowRight={
        <FontAwesomeIcon className="arrow-right" icon={faChevronRight} />
      }
      addArrowClickHandler
    >
      <SliderItem image="one" />
      <SliderItem image="two" />
      <SliderItem image="three" />
      <SliderItem image="four" />
      <SliderItem image="five" />
      <SliderItem image="six" />
      <SliderItem image="seven" />
      <SliderItem image="eight" />
    </Carousel>
  )
}

export default Slider
