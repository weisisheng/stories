import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
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
        <div>{props.story}</div>
      </Modal>
    </div>
  )
}

export default ReadMore
