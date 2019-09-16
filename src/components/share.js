import React, { useState } from 'react'
import { Twitter, Facebook, Pinterest, Mail } from 'react-social-sharing'
import Modal from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Share = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <Modal>
      <Twitter />
      <Facebook />
      <Pinterest />
      <Mail />
    </Modal>
  )
}

export default Share
