import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'
import happyVideo from '../assets/happy.mp4'

const Video = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
    <source src={happyVideo} type='video/mp4' />
    </video>
    <div className='content'>
        <h1>Happiness. Love.</h1>
        <p>Welcome to Healio</p>
    <div>
        <Link to='/talk' className='btn'>Talk to Healio</Link>
        <Link to='/contact' className='btn-light'>Contact us</Link>
    </div>
    </div>
    </div>
  )
}

export default Video