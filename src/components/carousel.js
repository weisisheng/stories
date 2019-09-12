import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import CarouselItem from './carouselItem'
import '../styles/carousel.css'

const Cards = () => {
  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        slidesPerPage={3}
        slidesPerScroll={1}
        animationSpeed={1500}
        arrows
        infinite
      >
        <CarouselItem image="one" />
        <CarouselItem image="two" />
        <CarouselItem image="three" />
        <CarouselItem image="four" />
        <CarouselItem image="five" />
        <CarouselItem image="six" />
        <CarouselItem image="seven" />
        <CarouselItem image="eight" />
      </Carousel>
    </div>
  )
}

export default Cards
