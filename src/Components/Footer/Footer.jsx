import React from 'react';

const socialData = [
  {
    icon: 'fa-brands fa-linkedin-in object-contain text-lg sm:text-2xl',
  },
  {
    icon: 'fa-brands fa-instagram object-contain text-lg sm:text-2xl',
  },
  {
    icon: 'fa-brands fa-github object-contain text-lg sm:text-2xl',
  },
  {
    icon: 'fa-regular fa-envelope object-contain text-lg sm:text-2xl',
  },
  {
    icon: 'fa-brands fa-twitter object-contain text-lg sm:text-2xl',
  },
]

export const Footer = () => {
  return (
    <section className="Footer w-full text-white bg-black py-10">
      <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
        <div className='flex flex-col justify-between items-center'>
          {/* <img src="./assets/Images/logo2.png" className='w-15p' alt="" /> */}
          <a href="javascript:void(0)">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-gradient pb-7">
              Gautam
            </h2>
          </a>
          <p className='text-center text-xl sm:text-2xl font text-blue-100 font-demo'>Living, learning & leveling up <br /> all at a time.</p>

          <div className="socialIcons pt-10 sm:pt-14">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {
                socialData.map((data, index) => {
                  return <div key={index} className='border-2 border-blue-400 rounded-full w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center transition duration-300 hover:bg-blue-500 hover:text-black hover:border-blue-500'>
                    <i className={data.icon}></i>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
