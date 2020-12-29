import React, { useRef, useState, useEffect } from 'react';
import './About.css';

export default function About(props) {
    const ref = useRef();
    const [fadeIn, setFadeIn] = useState(false);
    const { text } = props.data;

    useEffect(() => {
        const nodeRef = ref.current;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setFadeIn(true);
                observer.unobserve(nodeRef);
            }
        });
        observer.observe(nodeRef);

        return () => observer.unobserve(nodeRef);
    }, []);

    return (
        <section className='about' id='a-propos'>
            <div className={`about-container${fadeIn ? ' fade-in' : ''}`} ref={ref}>
                <h2>A propos</h2>

                <div className='about-tech'>
                    <i className='fab fa-html5 html'></i>
                    <i className='fab fa-css3-alt css'></i>
                    <i className='fab fa-js js'></i>
                    <i className='fab fa-react react'></i>
                    <i className='fab fa-sass sass'></i>
                    <i className='fab fa-git-alt git'></i>
                    <i className='fab fa-gulp gulp'></i>
                    <img src='./data/img/webpack.png' alt='' className='webpack' />
                </div>

                <div className='about-content'>
                    {text.map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                    <p className='cv-link'>
                        <a href='CV_Pierre-Yves_Flamand.pdf' download>
                            Télécharger mon cv (53.8Ko)
                        </a>
                        <i className='fas fa-download'></i>
                    </p>
                </div>

                <a
                    className='header-cta'
                    href='#mes-projets'
                    onClick={() => {
                        setTimeout(() => {
                            window.history.replaceState({}, document.title, '/');
                        }, 1);
                    }}
                >
                    <span className='hover'>mes projets</span>
                    <span className='link'>mes projets</span>
                </a>
            </div>
        </section>
    );
}
