import React from 'react'
import { Link } from 'gatsby'

const SliderItem = props => {
  return (
    <div className="slider-card-image">
      {props.image}
    </div>
  )
}

export default SliderItem
