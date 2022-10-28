import React from 'react';
import { DiJqueryLogo } from "react-icons/di";
import { SiTailwindcss, SiSass } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const AboutCard = [
    {
        img: '/assets/Images/learner.png',
        heading: 'Learner',
        firstSpan: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        PurpleText: 'Technologies that I am learning :',
        class: 'Designer one',
        tech: [
            {
                text: 'Tailwind CSS',
                icon: SiTailwindcss,
                class: 'inline'
            },
            {
                text: 'SASS',
                icon: SiSass,
                class: 'inline'
            },
            {
                text: 'Bootstrap Mixin',
                icon: BsFillBootstrapFill,
                class: 'inline'
            },
            {
                text: 'Wordpress',
                icon: 'i',
                class: 'fa-brands fa-wordpress-simple'
            },
        ]
    },
    {
        img: '/assets/Images/designer.png',
        heading: 'Front-end Developer',
        firstSpan: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        PurpleText: 'Technologies that I am familiar with :',
        class: 'Designer two',
        tech: [
            {
                text: 'HTML',
                icon: 'i',
                class: 'fa-brands fa-html5',
            },
            {
                text: 'CSS',
                icon: 'i',
                class: 'fa-brands fa-css3-alt',
            },
            {
                text: 'JS',
                icon: 'i',
                class: 'fa-brands fa-square-js',
            },
            {
                text: 'JQUERY',
                icon: DiJqueryLogo,
                class: 'inline',
            },
            {
                text: 'REACT FRONT-END',
                icon: 'i',
                class: 'fa-brands fa-react',
            },
            {
                text: 'SCSS',
                icon: 'i',
                class: 'fa-brands fa-sass',
            },
            {
                text: 'BOOTSTRAP',
                icon: 'i',
                class: 'fa-brands fa-bootstrap',
            },
        ]
    },
    {
        img: '/assets/Images/earth.png',
        heading: 'Languages',
        firstSpan: 'I am good at foreign lnguages, they are very interesting and important in my opinion.',
        PurpleText: 'Languages that I know :',
        class: 'Designer no-border three',
        tech: [
            {
                text: 'Gujarati',
                icon: 'i',
                class: '',
            },
            {
                text: 'Hindi',
                icon: 'i',
                class: '',
            },
            {
                text: 'English',
                icon: 'i',
                class: '',
            },
        ]
    },
];

export const AboutCards = () => {
    return (
        <ScrollAnimation
            animateOnce={true}
            animateIn="animate__slideInUp"
            animate__zoomIn
            duration={1.2}
        >

            <div className="w-full text-black -mt-72">
                <section className='container px-4 sm:px-3 mx-auto lg:max-w-7xl md:px-8'>
                    <div className="card-comp bg-zinc-300 rounded-lg grid grid-flow-row grid-cols-1 sm:grid-cols-2  p-10">

                        {
                            AboutCard.map((card, index) => {
                                return <div key={index} className={card.class}>
                                    <div className="circle">
                                        <img src={card.img} className='w-50p' alt="" />
                                    </div>
                                    <div className="decription">
                                        <p className='Heading'>{card.heading}</p>
                                        <span className='text-center text-sm sm:text-base pb-5'>
                                            {card.firstSpan}
                                        </span>
                                        <p className='color-change text-sm sm:text-base'>
                                            {card.PurpleText}
                                        </p>
                                        <div className="tech text-sm sm:text-base">

                                            {card?.tech?.map((techie, index) => {
                                                return <p key={index}>{techie?.text} <techie.icon className={`${techie?.class}`} /> </p>
                                            })}

                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </section>
            </div>
        </ScrollAnimation>
    )
}
