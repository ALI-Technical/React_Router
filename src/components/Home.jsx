import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page-div">
        <h1 style={{ fontSize: 75 }} className='text-center'>Home</h1>
      </div>
    </>
  )
}

export default Home
