import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
const Profile = () => {
  
  return (
    
    <div>
        <h1 className="logout-title">Welcome</h1>
        <Link to='/login' ><input type="logout" className="logout-button" value="Log Out" /> </Link>
        <h1 className='logout-status'>Status : Logged  </h1>
    </div>
  )
}

export default Profile
