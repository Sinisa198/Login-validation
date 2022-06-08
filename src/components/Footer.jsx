import React from 'react'

import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='wrap'>
          <div className='footer__wrap'>
            <div className='footer__logo'>
              <Link to='/' className='header__home'>
              </Link>
            </div>
            <div className='copyright'>
              <span>Copyright © 2022 Sinisa Ljubanovic</span>{' '}
              <span className='copyright-line'>|</span>{' '}
              <span>You can do this!</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
