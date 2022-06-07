import React from 'react'

import key from '../assets/images/key.jpg'
import anotherkey from '../assets/images/anotherkey.jpg'
import Footer from '../components/Footer'
import comunication from '../assets/images/comunication.jpg'
import '../style.css'

const Home = () => {
  
  return (
    <div>
        <h1 className="success">Key to success</h1>
        <h3 className="title">How do you define success in life? <br/>
        Most people consider success as having a great career,<br /> wealth, and respect<br/> </h3>
        <h3  className="title">from peers. But, don t overlook goals <br />
        that will support a happier life.<br /> Prioritizing relationships, physical</h3>
        <h3  className="title">health, safety, contributing to others,<br/> 
        and creative expression have been shown to <br />improve feelings of happiness.</h3>
        <a href='https://medium.com/the-ascent/the-5-keys-to-success-997d6a5267af'><button className="learn-more-btn" > Learn more  </button></a>
        <div className='image'>
        <img src={key} className='key-image' alt="" />
        </div>
        
        <div className="secondpage">
          <div className='second-title'>
             <h1 className='titlee'>
               In order to succeed, you have to work hard, give the <br />maximum you can, have your goal and push towards it.<br />
              No one else will help you with that, Alone you have to succeed
             </h1>
          </div>

             <div className="another-image">
             <img src={anotherkey} className='keytosucces' alt="" /> 
            </div>       
        </div>
        <div className='final-page'>
          <h1 className='final-title'>Good communication can make <br />
          the difference between confident, motived employees and an unproductive team with low morale.</h1>
          <img src={comunication} className='image-comunication' alt="" />
          <h1 className='finish'>It builds thriving relationships and gives people the information they need to contribute to the success of the business.</h1>
        </div>
        <Footer />
    </div>
    
   
  )
}

export default Home
