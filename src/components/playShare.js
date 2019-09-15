import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'

import '../styles/play-share.css'

const PlayShare = () => {
  // const handlePlay = () => {}
  // const handleShare = () => {}
  return (
    <div className="play-share">
      <div className="play-wrapper">
        <button className="play">
          <FontAwesomeIcon icon={faPlay} />
          &nbsp;Play
        </button>
      </div>
      <div className="share-wrapper">
        <button className="share">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        &nbsp;
        <h3>Share</h3>
      </div>
    </div>
  )
}

export default PlayShare
