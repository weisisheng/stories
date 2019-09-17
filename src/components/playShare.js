import React, { useState } from 'react'
import { Twitter, Facebook, Pinterest, Mail } from 'react-social-sharing'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

import '../styles/play-share.css'

const PlayShare = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handlePlay = e => {
    e.preventDefault()
    navigate(props.to)
  }

  return (
    <div className="play-share">
      <div className="play-wrapper">
        <button onClick={handlePlay} className="play">
          <FontAwesomeIcon icon={faPlay} />
          &nbsp;Play
        </button>
      </div>
      <div className="share-wrapper" onClick={handleShow}>
        <button className="share">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        &nbsp;
        <h3>Share</h3>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share This Story</Modal.Title>
        </Modal.Header>
        <Twitter link={`https://rmhpstories.com${props.share}`} />
        <Facebook link={`https://rmhpstories.com${props.share}`} />
        <Pinterest link={`https://rmhpstories.com${props.share}`} />
        <Mail link={`https://rmhpstories.com${props.share}`} />
      </Modal>
    </div>
  )
}

export default PlayShare
