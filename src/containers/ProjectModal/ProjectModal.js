import React from 'react';

import './ProjectModal.css';

export default function ProjectModal() {
    return (
        <div className='project-modal'>
            <article className='project-container'>
                <div className='project-img' style={{ backgroundImage: 'url(./data/img/avatar.png)' }}></div>
                <div className='project-content'>
                    <h1 className='project-title'>TITLE OF PROJECT</h1>
                    <div className='project-tech'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JAVASCRIPT</span>
                        <span>REACT</span>
                        <span>RESPONSIVE</span>
                        <span>SASS</span>
                    </div>
                    <h2 className='project-about'>ABOUT</h2>
                    <div className='project-desc'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
                            consequatur.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur
                            quaerat quasi ipsum eius. Eligendi!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur
                            quaerat quasi ipsum eius. Eligendi!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur
                            quaerat quasi ipsum eius. Eligendi!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur
                            quaerat quasi ipsum eius. Eligendi!
                        </p>
                    </div>
                    <div className='project-links'>
                        <a className='project-link' href='#'>
                            <i className='far fa-eye'></i>DEMO
                        </a>
                        <a className='project-link' href='#'>
                            <i className='fas fa-code'></i>CODE
                        </a>
                    </div>
                </div>
                <div
                    onClick={() => {
                        document.querySelector('.project-modal').classList.remove('show');
                    }}
                    className='close-btn'
                ></div>
            </article>
        </div>
    );
}
