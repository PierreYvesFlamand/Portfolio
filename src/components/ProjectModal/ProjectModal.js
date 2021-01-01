import React, { useEffect, useState } from 'react';

import './ProjectModal.css';

export default function ProjectModal({ data, closeBtn }) {
    const [mounted, setMounted] = useState(false);
    const { githubName, title, techs, desc } = data;

    useEffect(() => {
        setMounted(true);
    }, []);

    function closeModal() {
        setMounted(false);
        setTimeout(() => {
            closeBtn(false);
        }, 400);
        document.body.style.overflow = 'unset';
    }

    return (
        <div onClick={closeModal} className={`project-modal ${mounted ? 'show' : ''}`}>
            <article className='project-container'>
                <div
                    className='project-img'
                    style={{
                        backgroundImage: `url(https://pierreyvesflamand.github.io/${githubName}/project-img.png)`,
                    }}
                ></div>
                <div className='project-content'>
                    <h1 className='project-title'>{title.toUpperCase()}</h1>
                    <div className='project-tech'>
                        {techs.map((tech, idx) => (
                            <span key={idx}>{tech.toUpperCase()}</span>
                        ))}
                    </div>
                    <div className='project-desc'>
                        {desc.map((desc, idx) => (
                            <p key={idx}>{desc}</p>
                        ))}
                    </div>
                    <div className='project-links'>
                        <a
                            className='project-link'
                            href={`https://pierreyvesflamand.github.io/${githubName}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='far fa-eye'></i>DEMO
                        </a>
                        <a
                            className='project-link'
                            href={`https://github.com/PierreYvesFlamand/${githubName}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <i className='fas fa-code'></i>CODE
                        </a>
                    </div>
                </div>
                <div onClick={closeModal} className='close-btn'></div>
            </article>
        </div>
    );
}
