import React from 'react';

export const Hero = () => {
  return (

    <section className="Hero w-full h-hero-w text-white">
      <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="intro flex items-center flex-col justify-center">
            <div>
              <p className="text-5xl font-bold line tracking-wide">Hi, I am<br />Gautam Patoliya</p>
              <span className='font-medium text-zinc-500'>Frontend web developer</span>
            </div>
            <div className="btns flex items-center justify-between gap-14 mt-8">
              <a href="/assets/Vijay.jpg" download>
                <button className='bg-gradient-to-r from-blue-700 to-pink-600 rounded-full w-40 py-2 border-none'>Download CV</button>
              </a>
              <a href="#">
                <button className='w-40 py-2 rounded-full border-gray-400 border-2 hover:bg-gray-400 transition duration-300 hover:text-black hover:font-bold'>More</button>
              </a>
            </div>
          </div>
          <div className="MyImg flex justify-center items-center">
            <div className='flex justify-center items-center w-60p h-40p sm:h-35p md:h-35p lg:h-60p xl:w-65 rounded-full bg-center bg-cover bg-hero-pattern drop-shadow-white-shade'>
              <img src={require('./images/1.jpg')} className='w-full h-full rounded-full object-contain backdrop-blur-sm' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}