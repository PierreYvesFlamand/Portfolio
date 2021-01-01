import React from 'react';
import './Ctas.css';

export default function Cta({ ctas }) {
    return (
        <div className='ctas-container'>
            {ctas.map((cta, idx) =>
                cta ? (
                    <a
                        key={idx}
                        className='cta'
                        href={`#${idx === 0 ? 'about' : 'projects'}`}
                        onClick={() => {
                            setTimeout(() => {
                                window.history.replaceState({}, document.title, '/');
                            }, 1);
                        }}
                    >
                        <span className='cta-hover'>{cta}</span>
                        <span className='cta-base'>{cta}</span>
                    </a>
                ) : null
            )}
        </div>
    );
}
