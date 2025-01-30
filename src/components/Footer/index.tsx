'use client'

import React from 'react'
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="go">GO</span>
          <span className="surf">SURF</span>
        </div>
        <div className="footer-copyright">© GO-SURF 2018. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  )
}

export default Footer
