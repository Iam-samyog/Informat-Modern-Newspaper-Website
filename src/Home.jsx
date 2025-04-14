import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Footer'
import Newsletter from './Components/Newsletter'
import Body from './Body/Body'


const Home = () => {
  return (
    <>
      <Header/>
      <div className=''>
      <Hero/>
      </div>
      <div className="my-5">
      <Body/>
      </div>
      <div className='mx-auto my-10  '>
        <Newsletter/>
      </div>
    
      <div className='mt-[150px]'>
      <Footer/>
      </div>
    </>
  )
}

export default Home
