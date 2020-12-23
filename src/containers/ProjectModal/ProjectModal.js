import React from 'react';

import './ProjectModal.css';

export default function ProjectModal() {
    return (
        <div className='project-modal'>
            <article className='project-container'>
                <img className='project-img' src='' alt='' />
                <h1>TITLE OF PROJECT</h1>
                <div className='project-lang'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>RESPONSIVE</span>
                    <span>SASS</span>
                </div>
                <h2>ABOUT</h2>
                <div className='project-desc'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, consequatur.</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur quaerat
                        quasi ipsum eius. Eligendi!
                    </p>
                </div>
                <a className='project-link' href='#'>
                    <i class='far fa-eye'></i>DEMO
                </a>
                <a className='project-link' href='#'>
                    <i class='fas fa-code'></i>CODE
                </a>
            </article>
        </div>
    );
}
