import React from 'react'

import icon from '../../assets/images/first.jpg'
import secondicon from '../../assets/images/secondicon.jpg'
import threeicon from '../../assets/images/threeicon.jpg'

const Tips = () => {
    return (
            <div class="wrapper">
           <div class="team">
          <div class="tips">
            <div class="icons">
              <img src={icon} alt="" className='icon' />
            </div>
            <h3></h3>
            <p> First of all, you have to have a goal that you want to go to and do your best, 
              when you set that goal, you have to focus on what you are doing. It has to click in your head that you want it and that you are going towards it, 
              of course there will be problems and mistakes towards that goal, but that is all normal.</p>
          </div>
          <div class="tips">
            <div class="icons">
              <img src={secondicon} alt=""  className='icon'/>
            </div>
            <p class="role">Tester</p>
            <p></p>When you have succeeded in that, you are halfway to your maximum, where you will show everything you know and can do.<br />
          Problems are always there to hold you back, but you have to overcome them.
          Not only is work at work enough to make something work, you also have to work very hard at home.           </div>
          <div class="tips">
            <div class="icons">
              <img src={threeicon} alt="" className='icon' />
            </div>
            <p class="role">s</p>
            <p>You succeed when you see the results of your hard work, but there is no relaxation, you still have to be focused.
            Reaching the goal is very hard, it requires a lot of effort and will.<br />
            The result is an indicator of your success. <br />
            </p>
          </div>
        </div>
      </div>	
       
    )
  }
  
  export default Tips