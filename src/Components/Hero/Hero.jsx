import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const Hero = () => {
  return (

    <section className="Hero w-full h-hero-w text-white">
      <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="intro flex items-center flex-col justify-center">
            <div className='animate__animated animate__rollIn '>
              <p className="text-5xl font-bold line tracking-wide pb-3">Hi, I am<br />Gautam Patoliya</p>
              <span className='animate__animated animate__rollIn font-medium text-zinc-500'>Frontend web developer</span>
            </div>
            <div className="btns flex items-center justify-between gap-14 mt-8">
              <a href="/assets/Vijay.jpg" className='animate__animated animate__rollIn' download>
                <button className='downloadBtn bg-blue-gradient text-bg-color font-bold rounded-full w-40 py-2'>Download CV</button>
              </a>
              <a href="#" className='animate__animated animate__rollIn'>
                <button className='w-40 py-2 rounded-full border-gray-400 border-2 hover:bg-gray-400 transition duration-300 hover:text-black hover:font-bold'>More</button>
              </a>
            </div>
          </div>
          <div className="animate__animated animate__backInRight MyImg flex justify-center items-center">
            <div className='flex justify-center items-center w-60p h-40p sm:h-35p md:h-35p lg:h-60p xl:w-65 rounded-full bg-center bg-cover bg-hero-pattern drop-shadow-white-shade'>
              <img src={require('./images/1.jpg')} className='w-full h-full rounded-full object-contain backdrop-blur-sm' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}