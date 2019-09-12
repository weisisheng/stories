import React from 'react'
import { Link } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'

import Card from './card'
import '../styles/cards.css'

const Cards = () => {
  return (
    <div className="cards">
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Cards
