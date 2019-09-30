import React from 'react'

import '../styles/ipad-footer.css'

const IpadFooter = props => {
  return (
    <footer
      className="ipad-footer"
      style={{ height: props.height, display: props.display }}
    />
  )
}

export default IpadFooter
