import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/social.css'

const Social = props => {
  return (
    <div className="social" style={{ display: props.display }}>
      <ul>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://www.facebook.com/RMHPColorado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} width={0} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://twitter.com/rmhp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://www.instagram.com/rmhpcolorado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            style={{ color: '#979797' }}
            href="https://www.pinterest.com/rmhpcolorado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
