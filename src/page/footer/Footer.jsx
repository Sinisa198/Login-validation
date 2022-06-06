import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='wrap'>
          <div className='footer__wrap'>
            <div className='footer__logo'>
              <a href='/' className='header__home'>
              </a>
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
