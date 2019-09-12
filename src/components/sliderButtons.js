import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import '../styles/slider.css'
import Slider from './slider'

const SliderButtons = props => {
  return (
    <div className="slider-container">
      <Slider />
      <div className="arrows">
        <button>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default SliderButtons
