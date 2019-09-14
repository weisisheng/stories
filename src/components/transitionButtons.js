import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import '../styles/transition-buttons.css'

const TransitionButtons = () => {
  return (
    <>
      <Link to="/" className="transition-button-left">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span
          style={{ fontSize: '1rem', paddingLeft: '1rem', fontWeight: 'bold' }}
        >
          Previous Story
        </span>
      </Link>
      <Link to="/" className="transition-button-right">
        <span
          style={{ fontSize: '1rem', paddingRight: '1rem', fontWeight: 'bold' }}
        >
          Next Story
        </span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </>
  )
}

export default TransitionButtons
