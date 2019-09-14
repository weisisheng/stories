import React from 'react'
import { Link } from 'gatsby'

const SliderItem = props => {
  return (
    <Link className="slider-card-image" to={`/${props.name}/`}>
      <img src={props.src} alt={props.alt} />
      <h4>{props.name}</h4>
    </Link>
  )
}

export default SliderItem
