import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Content from '../components/Content'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Video />
        <Content />
        <Footer />
    </div>
  )
}

export default Home