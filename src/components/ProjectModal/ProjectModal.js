import React, { useEffect, useState } from 'react';

import './ProjectModal.css';

export default function ProjectModal({ data, closeBtn }) {
    const [mounted, setMounted] = useState(false);
    const { img, title, techs, desc, demoLink } = data;
    let { codeLink } = data;

    if (!Array.isArray(codeLink)) {
        codeLink = [codeLink];
    }

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
            <article
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='project-container'
            >
                <div
                    className='project-img'
                    style={{
                        backgroundImage: `url(${img})`,
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
                        {demoLink ? (
                            <a
                                className='project-link'
                                href={demoLink}
                                target='_blank'
                                rel='noreferrer'
                                title={`Demo de ${title}`}
                            >
                                <i className='far fa-eye'></i>DEMO
                            </a>
                        ) : null}

                        {codeLink.map((codeLink, idx) => (
                            <a
                                key={idx}
                                className='project-link'
                                href={codeLink}
                                target='_blank'
                                rel='noreferrer'
                                title={`Code source de ${codeLink
                                    .split('/')
                                    [codeLink.split('/').length - 1].replace(/-/g, ' ')}`}
                            >
                                <i className='fas fa-code'></i>CODE
                            </a>
                        ))}
                    </div>
                </div>
                <div onClick={closeModal} className='close-btn'></div>
            </article>
        </div>
    );
}
