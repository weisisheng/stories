import React from 'react'
// import { Link } from 'gatsby'
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
          <a
            style={{ color: '#979797' }}
            href="https://www.facebook.com/RMHPColorado"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://twitter.com/rmhp"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://www.instagram.com/rmhpcolorado/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://www.pinterest.com/rmhpcolorado/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
