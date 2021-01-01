import React, { useContext } from 'react';
import './About.css';

import { DataContext } from '../../context/dataContext';
import FadeIn from '../../hooks/FadeIn';

export default function About() {
    const { text } = useContext(DataContext).data.about;
    const { link } = useContext(DataContext).data.asideSocial[3];
    const [ref, fadeIn] = FadeIn();

    return (
        <section className='about' id='a-propos'>
            <div
                className='about-container'
                style={fadeIn ? { transform: 'scale(1)', opacity: 1 } : null}
                ref={ref}
            >
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
                    {text.map((item, idx) => {
                        return idx !== text.length - 1 ? (
                            <p key={idx}>{item}</p>
                        ) : (
                            <p key={idx} className='cv-link'>
                                <a href={link} download>
                                    {item}
                                </a>
                            </p>
                        );
                    })}
                </div>

                {/* <a
                    className='header-cta'
                    href='#mes-projets'
                    onClick={() => {
                        setTimeout(() => {
                            window.history.replaceState({}, document.title, '/');
                        }, 1);
                    }}
                >
                    <span className='hover'>mes projets</span>
                    <span className='base'>mes projets</span>
                </a> */}
            </div>
        </section>
    );
}
