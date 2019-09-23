import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import MobileFooter from './mobileFooter'
import IpadFooter from './ipadFooter'

import '../styles/layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer display="flex" />
      <MobileFooter height="45vh" />
      <IpadFooter height="45vh" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
