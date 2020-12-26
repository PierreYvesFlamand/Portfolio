import React from 'react';

import './Projects.css';

export default function Projects() {
    return (
        <section className='projects' id='my-projects'>
            <div className='projects-container'>
                <h2>Projects</h2>
                <div className='all-projetcs'>
                    <div className='project'>
                        <div className='img' style={{ backgroundImage: 'url(./data/img/avatar.png)' }}></div>
                        <div
                            className='hover'
                            onClick={() => {
                                document.querySelector('.project-modal').classList.add('show');
                                document.body.style.overflow = 'hidden';
                            }}
                        >
                            <a href='#'>
                                <i className='far fa-eye'></i>VIEW PROJECT
                            </a>
                        </div>
                    </div>
                    <div className='project'></div>
                    <div className='project'></div>
                    <div className='project'></div>
                    <div className='project'></div>
                </div>
            </div>
        </section>
    );
}
