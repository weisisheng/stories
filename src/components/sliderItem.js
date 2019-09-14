import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const SliderItem = props => {
  return (
    <Link className="slider-card-image" to={`/${props.name}`}>
      <Img fluid={props.source} alt={props.alt} />
      <h4>{props.name}</h4>
    </Link>
  )
}

export default SliderItem
