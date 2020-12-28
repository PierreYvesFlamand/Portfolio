import React, { useEffect, useState } from 'react';

import './ProjectModal.css';

export default function ProjectModal(props) {
    const [mounted, setMounted] = useState(false);
    const { img, title, techs, desc, demoLink, codeLink } = props.data;

    useEffect(() => {
        setMounted(true);
    }, []);

    function closeModal() {
        setMounted(false);
        setTimeout(() => {
            props.closeBtn(false);
        }, 400);
        document.body.style.overflow = 'unset';
    }

    return (
        <div onClick={closeModal} className={`project-modal ${mounted ? 'show' : ''}`}>
            <article className='project-container'>
                <div className='project-img' style={{ backgroundImage: `url(./data/img/${img})` }}></div>
                <div className='project-content'>
                    <h1 className='project-title'>{title.toUpperCase()}</h1>
                    <div className='project-tech'>
                        {techs.map((tech, idx) => (
                            <span key={idx}>{tech.toUpperCase()}</span>
                        ))}
                    </div>
                    <h2 className='project-about'>ABOUT</h2>
                    <div className='project-desc'>
                        {desc.map((desc, idx) => (
                            <p key={idx}>${desc}</p>
                        ))}
                    </div>
                    <div className='project-links'>
                        <a className='project-link' href={demoLink} target='_blank'>
                            <i className='far fa-eye'></i>DEMO
                        </a>
                        <a className='project-link' href={codeLink} target='_blank'>
                            <i className='fas fa-code'></i>CODE
                        </a>
                    </div>
                </div>
                <div onClick={closeModal} className='close-btn'></div>
            </article>
        </div>
    );
}
