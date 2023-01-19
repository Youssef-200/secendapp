import React from 'react'
import './join.css'
//import React,{ useRef } from 'react'
//import emailjs from '@emailjs/browser'
const join = () => {
   // const form = useRef()
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form  className="email-container">
                <input type="email" name='user-email' placeholder='Enter your Email Adresse' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default join;