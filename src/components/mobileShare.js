import React, { useState } from 'react'
import { Twitter, Facebook, Pinterest, Mail } from 'react-social-sharing'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/mobile-share.css'

const MobileShare = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <div className="" onClick={handleShow}>
        <button className="mobile-share">
          <FontAwesomeIcon icon={faShareAlt} />
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="sm"
        className="social-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Share This Story</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Twitter link={`https://rmhpstories.com`} />
          <Facebook link={`https://rmhpstories.com`} />
          <Pinterest link={`https://rmhpstories.com`} />
          <Mail link={`https://rmhpstories.com`} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MobileShare
