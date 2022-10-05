import React from 'react'
import { AboutCards } from './AboutCards'

export const About = () => {
    return (
        <>
        <section className="Hero w-full text-white pt-16 pb-96 bg-black">
            <div className="container px-3 mx-auto lg:max-w-7xl md:px-8">
                <p className='title'>About</p>

                <div className="description">
                    <div className="desc-text flex items-center justify-center w-full">
                        <span className='text-center text-sm w-50p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti veritatis architecto maiores harum, ex corporis quisquam! Commodi, magnam officiis illum, molestiae, repellat voluptatem incidunt praesentium libero ex iusto est id vero impedit in et numquam.
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <>
            <AboutCards/>
        </>
        </>
    )
}
