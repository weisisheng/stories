import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import CarouselItem from './carouselItem'
import '../styles/carousel.css'

const Cards = () => {
  return (
    <div className="carousel-container">
      <Carousel slidesPerPage={3} arrows infinite className="carousel cards">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </div>
  )
}

export default Cards
