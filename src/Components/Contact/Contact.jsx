import React from 'react';

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
    <section className="Contact w-full text-white pb-16">
      <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
        <p className='title text-gradient'>Contact Me</p>

        <div className="contact-container bg-white rounded-lg p-2">
          <div className="grid grid-cols-12">
            <div className="contact-info relative col-span-5 text-black bg-blue-gradient rounded-md px-12 py-6 shadow-lg">
              <p className='text-xl font-extra-bold tracking-wide pb-1'>Contact Information</p>
              <span className='text-sm text-zinc-800'>For all enqueries, please mail me using this form.</span>
              <div className='pt-12'>
                {
                  contactDetails.map((contact, index) => {
                    return <p key={index} className='py-0 pb-4 grid grid-flow-row grid-cols-12 items-center tracking-wide text-gray-800'>
                      <i className={`${contact.icon} pr-3 col-span-1 text-indigo-800 text-xl`}></i>
                      <span className='font-bold pr-1 col-span-3 text-center'>{contact.boldtxt}</span>
                      <span className='col-span-5'>{contact.text}</span>
                    </p>
                  })
                }
              </div>

              <div className='pt-4'>
                <img src="./assets/Images/contact4.png" className='w-50p m-auto object-contain animate-up-down filter drop-shadow-2xl' alt="" />
              </div>

            </div>

            <div className="contact-form col-span-7 px-10 py-6 text-black">
              <div className='grid gap-20 grid-cols-2'>
                <div>
                  <label className='text-md'>Name</label> <br />
                  <input className='inputBox' type="text" placeholder='Enter your name' />
                </div>
                <div>
                  <label className='text-md'>E-mail</label> <br />
                  <input className='inputBox' type="text" placeholder='Enter your e-mail' />
                </div>
              </div>
              <div className="subject pt-4">
                <label className='text-md'>Subject</label> <br />
                <input className='inputBox' type="text" placeholder='Enter your subject' />
              </div>
              <div className="message pt-4">
                <label className='text-md'>Message</label> <br />
                <textarea id="message" rows="4" className='inputBox resize-none' placeholder='Enter your message'></textarea>
              </div>

              <div className="btn pt-8">
                <button className='bg-indigo-800 text-white px-4 py-3 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 hover:bg-indigo-900'>Send Message</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
