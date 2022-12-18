import React from 'react';
import { CardData } from './ProjectCards';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const Projects = () => (
    <div className="Projects w-full text-white pt-8 sm:pt-16" id='Projects'>
        <section className="container px-3 mx-auto lg:max-w-7xl md:px-8">
            <ScrollAnimation
                animateOnce={true}
                animateIn="animate__jackInTheBox"
                duration={1.2}
            >
                <p className='title text-gradient'>My Projects</p>
            </ScrollAnimation>

            <div>
                <ScrollAnimation
                    animateOnce={true}
                    animateIn="animate__slideInUp"
                    animate__zoomIn
                    duration={1.2}
                >

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                        {CardData.map((card) => (

                            // <ScrollAnimation
                            //     animateOnce={true}
                            //     animateIn="animate__slideInLeft"
                            //     duration={1.2}
                            //     delay={2}
                            // >
                            <div className={`main-card-p h-[10rem] sm:h-[15rem] rounded-lg bg-cover bg-center hover:-translate-y-2 transition duration-300 ${card.bg}`} key={card.index}>
                                <div className="card-p flex justify-center items-center h-[10rem] sm:h-[15rem] group rounded-lg text-center transition-every duration-500 hover:bg-card-overlay hover:backdrop-blur-xl">
                                    <p className='card-text invisible text-base sm:text-lg z-50 group-hover:visible'>{card.text}</p>
                                </div>
                            </div>

                            // </ScrollAnimation>

                        ))}

                    </div>
                </ScrollAnimation>
            </div>

        </section>
    </div>
)