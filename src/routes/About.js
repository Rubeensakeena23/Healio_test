import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
// import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='ABOUT US' text='Know about us' /><br />
        {/* <AboutUs /> */}
        <Footer />
    </div>
  )
}

export default About