import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='ABOUT US' text='Know about us' />
        <Footer />
    </div>
  )
}

export default About