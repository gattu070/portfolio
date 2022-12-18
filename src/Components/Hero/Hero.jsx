import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "animate.css/animate.min.css";

export const Hero = () => {
  return (

    <section className="Hero w-full min-h-[90vh] relative flex items-center text-white" id="Hero">
      <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="order-2 sm:order-1 h-auto intro flex items-baseline flex-col justify-center">
            <div className='flex items-center flex-col sm:block'>
              <p className='animate__animated animate__flipInY animate__delay-1s font-bold text-zinc-600 bg-blue-gradient text-[8px] sm:text-xs p-1 py-[0.15rem] rounded-sm w-fit'>Frontend web developer</p>

              <p className="animate__animated animate__backInLeft text-2xl sm:text-4xl font-bold line tracking-wide pt-5">Hi, I am</p> <br />
              <ReactTypingEffect
                text={["Gautam Patoliya", "Web Developer"]}
                className='animate__animated animate__fadeInLeft animate__delay-1s text-2xl sm:text-4xl font-bold line tracking-wide text-gradient trans-none'
              />

              <div className='w-75p lg:w-70p pt-5 text-center sm:text-left'>
                <span className='animate__animated animate__fadeInLeft animate__delay-1s font-medium text-zinc-500 text-sm sm:text-base'>
                  Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions.
                </span>
              </div>
            </div>
            <div className="mx-auto text-sm sm:text-base sm:mx-0 btns flex items-center justify-between gap-11 sm:gap-14 mt-8">
              <a href="/assets/Vijay.jpg" className='animate__animated animate__backInUp' download>
                <button className='downloadBtn bg-blue-gradient text-bg-color font-bold rounded-full w-32 sm:w-36 py-2 transition ease-in-out duration-200 hover:scale-105'>Download CV</button>
              </a>
              <a href="#" className='animate__animated animate__backInUp'>
                <button className='w-32 sm:w-36 py-2 rounded-full border-gray-400 border-2 hover:bg-gray-400 transition duration-300 hover:text-black hover:font-bold'>More</button>
              </a>
            </div>
          </div>
          <div className="order-1 sm:order-2 h-[30vh] sm:h-auto animate__animated animate__backInRight MyImg flex justify-center items-center">
            <div className='imgBox flex justify-center items-center w-40p h-70p sm:h-35p md:h-65p md:w-60p  rounded-full bg-center bg-cover bg-hero-pattern drop-shadow-white-shade'>
              <img src={require('./images/5.jpg')} className='w-full h-full rounded-full object-contain backdrop-blur-sm' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}