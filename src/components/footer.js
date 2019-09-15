import React from 'react'

import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>&copy; 2020 Rocky Mountain Health Plans</li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/terms-and-conditions?_ga=2.265132173.305463178.1568489940-139732968.1567635357"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/website-privacy-policy?_ga=2.63296173.305463178.1568489940-139732968.1567635357"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy & Disclosure
          </a>
        </li>
        <li>|</li>
        <li>
          <a
            href="https://www.rmhp.org/legal/accessibility?_ga=2.264646797.305463178.1568489940-139732968.1567635357"
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
