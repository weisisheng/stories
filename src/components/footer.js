import React from 'react'

import '../styles/footer.css'

const Footer = props => {
  return (
    <footer className="footer" style={{ height: props.height, display: props.display }}>
      <ul style={{ display: props.display }}>
        <li>&copy; {new Date().getFullYear()} Rocky Mountain Health Plans</li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/terms-and-conditions?_ga=2.46207714.455976344.1569004974-1096975663.1566416122"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/website-privacy-policy?_ga=2.46207714.455976344.1569004974-1096975663.1566416122"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy & Disclosure
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/accessibility?_ga=2.46207714.455976344.1569004974-1096975663.1566416122"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
