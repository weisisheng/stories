import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import '../styles/transition-buttons.css'

const TransitionButtons = props => {
  const leftArrow = useKeyPress('ArrowLeft')
  const rightArrow = useKeyPress('ArrowRight')

  // Custom Hook
  function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false)

    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    }

    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler)
      window.addEventListener('keyup', upHandler)
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler)
        window.removeEventListener('keyup', upHandler)
      }
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return keyPressed
  }

  return (
    <div
      onKeyDown={
        leftArrow
          ? navigate(props.prev)
          : rightArrow
          ? navigate(props.next)
          : null
      }
    >
      <Link to={props.prev} className="transition-button-left">
        <FontAwesomeIcon icon={faChevronLeft} />
        <span
          style={{
            fontSize: '1rem',
            paddingLeft: '1rem',
            fontWeight: 'bold',
          }}
        >
          Previous Story
        </span>
      </Link>
      <Link to={props.next} className="transition-button-right">
        <span
          style={{
            fontSize: '1rem',
            paddingRight: '1rem',
            fontWeight: 'bold',
          }}
        >
          Next Story
        </span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </div>
  )
}

export default TransitionButtons
