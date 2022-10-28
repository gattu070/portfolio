import React from 'react'
import { AboutCards } from './AboutCards';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const About = () => {
    return (
        <>
                        
            <section className="About w-full text-white pt-8 sm:pt-16 pb-[22rem] sm:pb-96 bg-black">
                <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
                    <ScrollAnimation
                        animateOnce={true}
                        animateIn="animate__jackInTheBox"
                        duration={1.2}
                    >
                        <p className='title text-gradient'>About</p>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateOnce={true}
                        animateIn="animate__fadeInRightBig"
                        duration={1.2}
                    >
                        <div className="description">
                            <div className="desc-text flex items-center justify-center w-full">
                                <span className='text-center text-sm w-90p sm:w-50p'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis architecto maiores harum, ex corporis quisquam! Commodi, magnam officiis illum, molestiae, repellat voluptatem incidunt praesentium libero ex iusto est id vero impedit in et numquam.
                                </span>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>
            </section>
            <>
                <AboutCards />
            </>
        </>
    )
}
