import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import '../styles/sliderButtons.css'

const SliderButtons = props => {
  return (
    <div className="buttons-container">
      <div className="arrows">
        <button className="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={Carousel.prevSlide} className="BrainhubCarousel__arrows BrainhubCarousel__arrowRight">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default SliderButtons
