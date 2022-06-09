import React from 'react'
import { Link } from 'react-router-dom'


const Profile = (props) => {
  
  return (
    
    <div>
        <h1 className="logout-title">Welcome</h1>
        <Link to='/login' ><button className='logout-button'>Logout</button></Link>
        <h1>Status : {props.loggedInStatus} </h1>
    </div>
  )
}

export default Profile
