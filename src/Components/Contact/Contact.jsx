import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import 'tw-elements';

const contactDetails = [
  {
    icon: 'fa-solid fa-phone',
    text: '+91 88491 75650',
    boldtxt: 'Number :',
  },
  {
    icon: 'fa-solid fa-envelope-circle-check',
    text: 'patoliyagautam070@gmail.com',
    boldtxt: 'E-mail :',
  },
  {
    icon: 'fa-solid fa-location-dot',
    text: 'Junagadh-362011, Gujarat',
    boldtxt: 'Adress :',
  },
  {
    icon: 'fa-solid fa-earth-americas',
    text: 'gautam.io',
    boldtxt: 'Website :',
  },
]

export const Contact = () => {
  return (
    <section className="Contact w-full text-white pt-8 sm:pt-16 pb-16" id='Contact'>
      <div className="container px-4 sm:px-3 mx-auto lg:max-w-7xl md:px-8">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__jackInTheBox"
          duration={1.2}
        >
          <p className='title text-gradient'>Contact Me</p>
        </ScrollAnimation>

        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__slideInUp"
          animate__zoomIn
          duration={1.2}
        >


          <div className="contact-container bg-white rounded-lg p-2">
            <div className="grid grid-cols-12">
              <div className="contact-info relative col-span-12 sm:col-span-5 text-black bg-blue-gradient rounded-md px-12 py-6 shadow-lg text-center sm:text-left">
                <p className='text-lg sm:text-xl font-extra-bold tracking-wide pb-1'>Contact Information</p>
                <span className='text-sm text-zinc-800'>For all enqueries, please mail me using this form.</span>
                <div className='pt-8 sm:pt-12'>
                  {
                    contactDetails.map((contact, index) => {
                      return <p key={index} className='py-0 pb-4 grid grid-flow-row grid-cols-12 items-center tracking-wide text-gray-800 text-center lg:text-left'>
                        <i className={`${contact.icon} pr-0 sm:pr-3 pb-2 lg:pb-0 col-span-12 lg:col-span-1 text-indigo-800 text-xl`}></i>
                        <span className='font-bold text-sm sm:text-base pb-2 lg:pb-0 pr-0 sm:pr-1 col-span-12 lg:col-span-5 text-center'>{contact.boldtxt}</span>
                        <span className='col-span-12 lg:col-span-6 text-sm break-words sm:text-base'>{contact.text}</span>
                      </p>
                    })
                  }
                </div>

                <div className='pt-4 hidden lg:block'>
                  <img src="./assets/Images/contact4.png" className='w-50p m-auto object-contain animate-up-down filter drop-shadow-2xl' alt="" />
                </div>

              </div>

              <div className="contact-form col-span-12 sm:col-span-7 px-10 py-6 text-black">
                <div className='grid gap-8 sm:gap-20 grid-cols-2'>
                  <div>
                    <label className='text-sm sm:text-base'>Name</label> <br />
                    <input className='inputBox' type="text" placeholder='Enter your name' />
                  </div>
                  <div>
                    <label className='text-sm sm:text-base'>E-mail</label> <br />
                    <input className='inputBox' type="text" placeholder='Enter your e-mail' />
                  </div>
                </div>
                <div className="subject pt-4">
                  <label className='text-sm sm:text-base'>Subject</label> <br />
                  <input className='inputBox' type="text" placeholder='Enter your subject' />
                </div>
                <div className="message pt-4">
                  <label className='text-sm sm:text-base'>Message</label> <br />
                  <textarea id="message" rows="4" className='inputBox resize-none' placeholder='Enter your message'></textarea>
                </div>

                <div className="btn text-center sm:text-left pt-6 sm:pt-8">
                  <button data-mdb-ripple="true" data-mdb-ripple-color="light" className='bg-indigo-800 text-sm sm:text-base text-white px-3 lg:px-4 py-2 lg:py-3 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 hover:bg-indigo-900'>Send Message</button>
                </div>

                <div className='pt-7 sm:pt-10 lg:hidden'>
                  <img src="./assets/Images/contact4.png" className='w-50p m-auto object-contain animate-up-down filter drop-shadow-2xl' alt="" />
                </div>

              </div>

            </div>
          </div>

        </ScrollAnimation>
      </div>
    </section>
  )
}
