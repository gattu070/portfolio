import React from 'react';
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss, SiSass } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

// const AboutCard = [
//     {
//         img: '/assets/Images/designer.png',
//         heading: 'Front-end Developer',
//         firstSpan: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
//         PurpleText: 'Technologies that I am familiar with :',
//     },
//     {
//         img: '/assets/Images/designer.png',
//         heading: 'Front-end Developer',
//         firstSpan: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
//         PurpleText: 'Technologies that I am familiar with :',
//     },
//     {
//         img: '/assets/Images/designer.png',
//         heading: 'Front-end Developer',
//         firstSpan: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
//         PurpleText: 'Technologies that I am familiar with :',
//     },
// ];

export const AboutCards = () => {
    return (
        <ScrollAnimation
            animateOnce={true}
            animateIn="animate__slideInUp"
            animate__zoomIn
            duration={1.2}
        >

            <div className="w-full text-black -mt-72">
                <section className='container px-3 mx-auto lg:max-w-7xl md:px-8'>
                    <div className="card-comp bg-zinc-300 rounded-lg grid grid-flow-row grid-cols-3 p-10">
                        <div className="Designer">
                            <div className="circle">
                                <img src="/assets/Images/designer.png" className='w-50p' alt="" />
                            </div>
                            <div className="decription">
                                <p className='Heading'>Front-end Developer</p>
                                <span className='text-center pb-5'>
                                    I value simple content structure, clean design patterns, and thoughtful interactions.
                                </span>
                                <p className='color-change'>
                                    Technologies that I am familiar with :
                                </p>
                                <div className="tech">
                                    <p>HTML <i class="fa-brands fa-html5"></i></p>
                                    <p>CSS <i class="fa-brands fa-css3-alt"></i></p>
                                    <p>JS <i class="fa-brands fa-square-js"></i></p>
                                    <p>JQUERY <DiJqueryLogo className='inline' /></p>
                                    <p>REACT-FRONTEND <i class="fa-brands fa-react"></i></p>
                                    <p>SCSS <i class="fa-brands fa-sass"></i></p>
                                    <p>BOOTSTRAP <i class="fa-brands fa-bootstrap"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="Designer">
                            <div className="circle">
                                <img src="/assets/Images/learner.png" className='w-50p' alt="" />
                            </div>
                            <div className="decription">
                                <p className='Heading'>Learner</p>
                                <span className='text-center pb-5'>
                                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.                            </span>
                                <p className='color-change'>
                                    Technologies that I am learning :
                                </p>
                                <div className="tech">
                                    <p>Tailwind CSS <SiTailwindcss className='inline' /></p>
                                    <p>SASS <SiSass className='inline' /></p>
                                    <p>Bootstrap Mixin <BsFillBootstrapFill className='inline' /></p>
                                    <p>Wordpress <i class="fa-brands fa-wordpress-simple"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="Designer no-border">
                            <div className="circle">
                                <img src="/assets/Images/earth.png" className='w-50p' alt="" />
                            </div>
                            <div className="decription">
                                <p className='Heading'>Languages</p>
                                <span className='text-center pb-5'>
                                    I am good at foreign lnguages, they are very interesting and important in my opinion.
                                </span>
                                <p className="color-change">
                                    Languages that I know :
                                </p>
                                <div className="tech">
                                    <p>Gujarati</p>
                                    <p>Hindi</p>
                                    <p>English</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ScrollAnimation>
    )
}
