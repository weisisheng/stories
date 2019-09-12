import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import '../styles/social.css'

const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPinterest} />
        </li>
      </ul>
    </div>
  )
}

export default Social
