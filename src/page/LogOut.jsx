import React from 'react'

import { Link } from 'react-router-dom'

const  LogOut = () => {
  return (
    <div>
      <h1 className='logout-title'>Welcome </h1><br />

      <Link to='/login'><button className='logout-button'>Logout</button></Link>
    </div>
  )
}

export default LogOut
