import React from 'react';
import { CardData } from './ProjectCards';

export const Projects = () => {
    return (
        <div className="w-full text-white mt-16 pb-10">
            <section className="container px-3 mx-auto lg:max-w-7xl md:px-8">
                <p className='title'>My Projects</p>

                <div>
                    <div className="grid grid-cols-3 gap-5">

                        {CardData.map((card, index) => (
                            <div className={`main-card-p {card.bg}`} key={card.value}>
                                <div className="card-p group">
                                    <p className='card-text'>{card.text}</p>
                                </div>
                            </div>

                        ))}

                        {/* <div className="main-card-p">
                            <div className="card-p group">
                                <p className='card-text'>First Project</p>
                            </div>
                        </div>
                        <div className="main-card-p">
                            <div className="card-p group">
                                <p className='card-text'>First Project</p>
                            </div>
                        </div>
                        <div className="main-card-p">
                            <div className="card-p group">
                                <p className='card-text'>First Project</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
