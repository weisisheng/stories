import React from 'react'
import webby from '../images/award-icons/webby.png'
import filmFestival from '../images/award-icons/film-festival.png'
import goldenLeaf from '../images/award-icons/golden-leaf.png'
import specialSelection from '../images/award-icons/special-selection.png'
import logo from '../images/logo.png'

import '../styles/main.css'

const Main = () => {
  return (
    <div className="main">
      <div className="logo-container">
        <img className="logo" src={logo} alt="RMHP Logo" />
        <h4>presents</h4>
      </div>
      <h1 className="title">
        Life on the <br />
        western slope
      </h1>

      <p>Eight inspiring, real-life stories of the people we protect</p>
      <ul>
        <li>
          <img src={webby} alt="Webby" />
        </li>
        <li>
          <img src={filmFestival} alt="Film Festival" />
        </li>
        <li>
          <img src={goldenLeaf} alt="Golden Leaf" />
        </li>
        <li>
          <img src={specialSelection} alt="Special Selection" />
        </li>
      </ul>
    </div>
  )
}

export default Main
