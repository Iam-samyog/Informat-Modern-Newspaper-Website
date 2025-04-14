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
      {/* <div className="my-5">
      <Body/>
      </div> */}
       <Body/>
      <div className='mx-auto  mt-[20px] md:mt-[100px]'>
        <Newsletter/>
     
      </div>
     
    
      <div className=''>
      <Footer/>
      </div>
    </>
  )
}

export default Home
