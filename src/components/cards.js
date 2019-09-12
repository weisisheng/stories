import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Card from './card'
import '../styles/cards.css'
import '../styles/card.css'
import M from 'materialize-css'

const Cards = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.carousel')
    M.Carousel.init(elems, options)
  })

  const options = {
    dist: 0,
    padding: 30,
    numVisible: 3,
    shift: 0,
  }

  return (
    <div className="cards-container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        >
      </Helmet>
      <div className="carousel cards">
        <div className="carousel-item card-image">
          <a href="#one">one</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">two</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">three</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">four</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">five</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">six</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">seven</a>
        </div>
        <div className="carousel-item card-image">
          <a href="#one">eight</a>
        </div>
      </div>
    </div>
  )
}

export default Cards
