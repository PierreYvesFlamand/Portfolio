import React, { useState, useContext } from 'react';
import './Header.css';

import { DataContext } from '../../context/dataContext';
import FadeIn from '../../hooks/FadeIn';

export default function Header() {
    const { title, subs, ctas } = useContext(DataContext).data.header;
    const [ref, fadeIn] = FadeIn();

    return (
        <header className='header'>
            <div
                className='header-container'
                style={fadeIn ? { transform: 'scale(1)', opacity: 1 } : null}
                ref={ref}
            >
                <div className='header-content'>
                    <h1 className='header-title'>{title}</h1>

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
                        <span className='base'>{cta.replace(/-/g, '  ')}</span>
                    </a>
                );
            })}
        </div>
    );
}
