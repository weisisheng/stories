import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Carousel } from 'react-materialize'

import Card from './card'
import '../styles/cards.css'

const Cards = () => {
  const images = []
  return (
    <div className="cards">
      <Carousel images={[1, 2, 3, 4, 5]} />
    </div>
  )
}

export default Cards
