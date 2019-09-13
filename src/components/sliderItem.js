import React from 'react'
import { Link } from 'gatsby'

const SliderItem = props => {
  return (
    <a className="slider-card-image" href={props.name}>
      <img src={props.src} />
      <h4>{props.name}</h4>
    </a>
  )
}

export default SliderItem
