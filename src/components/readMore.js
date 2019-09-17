import React, { useState } from 'react'
import Img from 'gatsby-image'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/read-more.css'

const ReadMore = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="read-more">
      <button onClick={handleShow}>Read More&nbsp; [+]</button>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="modal-content" closeButton>
          <Img
            className="modal-img"
            fluid={props.modalImage}
            alt={props.name}
          />
          <div className="modal-text">
            <h3 className="title we-protect">We Protect</h3>
            <h1 className="title">{props.title}</h1>
            <p>{props.story}</p>
          </div>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ReadMore
