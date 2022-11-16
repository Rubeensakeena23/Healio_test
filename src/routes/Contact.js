import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Heroimage heading='CONTACT' text='Contact Healio' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact