import React, { useEffect } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Footer'
import Newsletter from './Components/Newsletter'
import Body from './Body/Body'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true      // animate only once
    });
  }, []);

  return (
    <>
   <div data-aos='fade-down'><Header /></div>
      
      <div className=''data-aos='fade-up' >
      <Hero/>
      </div>
      {/* <div className="my-5">
      <Body/>
      </div> */}
      <div data-aos='fade-left'>
       <Body/>
       </div>
      <div className='mx-auto  mt-[20px] md:mt-[100px]' data-aos='fade-left'>
        <Newsletter/>
     
      </div>
     
    
      <div className='' data-aos='fade-up'>
      <Footer/>
      </div>
    </>
  )
}

export default Home
