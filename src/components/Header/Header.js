import React, { useEffect, useRef, useState, useContext } from 'react';
import './Header.css';

import { DataContext } from '../../context/dataContext';

export default function Header() {
    const { data } = useContext(DataContext);
    const { subs, ctas } = data.header;

    const ref = useRef();
    const [fadeIn, setFadeIn] = useState(false);

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
        <header className='header'>
            <div className={`header-container${fadeIn ? ' fade-in' : ''}`} ref={ref}>
                <div className='header-text'>
                    <h1 className='header-h1'>PIERRE-YVES F.</h1>

                    {subs.map((sub, idxSub) => {
                        return (
                            <p key={`sub-${idxSub}`} className='header-sub'>
                                {sub.split(' ').map((word, idx) => {
                                    return <Word key={`sub-${idxSub}-word-${idx}`} word={word} />;
                                })}
                            </p>
                        );
                    })}
                </div>
                <Ctas data={ctas} />
            </div>
        </header>
    );
}

function Ctas({ data }) {
    return (
        <div className='header-ctas'>
            {data.map((cta, idx) => {
                return (
                    <a
                        key={`cta-${idx}`}
                        className='header-cta'
                        href={`#${cta}`}
                        onClick={() => {
                            setTimeout(() => {
                                window.history.replaceState({}, document.title, '/');
                            }, 1);
                        }}
                    >
                        <span className='hover'>{cta.replace(/-/g, '  ')}</span>
                        <span className='link'>{cta.replace(/-/g, '  ')}</span>
                    </a>
                );
            })}
        </div>
    );
}

function Word({ word }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <span
            className={`word${isActive ? ' isActive' : ''}`}
            onMouseEnter={() => {
                setIsActive(true);
            }}
            onMouseLeave={() => {
                setTimeout(() => {
                    setIsActive(false);
                }, 1400);
            }}
        >
            <span className='word-base'>{word}</span>
            <span className='word-hover'>{word}</span>
        </span>
    );
}
