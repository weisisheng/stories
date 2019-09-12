import React from 'react'
import { Link } from 'gatsby'

const CarouselItem = props => {
  return (
    <div className="card-image">
      <a href={props.href}>{props.image}</a>
    </div>
  )
}

export default CarouselItem
