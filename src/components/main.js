import React from 'react'
import webby from '../images/award-icons/WebbyAwards.svg'
import filmFestival from '../images/award-icons/BffAwards.svg'
import goldLeaf from '../images/award-icons/GoldLeafAwards.svg'
import logo from '../images/logo.png'
import logoSmall from '../images/logo-small.png'

const Main = () => {
  return (
    <div className="main">
      <div className="logo-container">
        <a
          href="https://www.rmhp.org"
          target="_blank"
          rel="noopener noreferrer"
          className="logo"
        >
          <img src={logo} alt="RMHP Logo" />
        </a>
        <a
          href="https://www.rmhp.org"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-small"
        >
          <img src={logoSmall} alt="RMHP Logo" />
        </a>
        <h4>presents</h4>
      </div>
      <h1 className="title">
        Life on the <br />
        western slope
      </h1>

      <p>Eight inspiring, real-life stories of the people we protect</p>
      <ul>
        <li className="award-icon">
          <img src={webby} alt="Webby Award" />
        </li>
        <li className="award-icon">
          <img src={goldLeaf} alt="Golden Leaf Award" />
        </li>
        <li className="award-icon">
          <img src={filmFestival} alt="Film Festival Special Selection" />
        </li>
      </ul>
    </div>
  )
}

export default Main
