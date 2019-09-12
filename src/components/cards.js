import React, { useState } from 'react'
import { Link } from 'gatsby'
import Carousel from './carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

import Card from './card'
import '../styles/cards.css'

const Cards = () => {
  return (
    <div className="cards">
      <Carousel />
    </div>
  )
}

export default Cards
