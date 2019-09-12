import React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from './card'
import '../styles/cards.css'

const Cards = () => {
  return (
    <div className="cards">
      <Carousel>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
        <Carousel.Item>
          <Card />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Cards
