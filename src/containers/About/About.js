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
                {text.map((text, idx) => (
                    <p key={idx}>{text}</p>
                ))}
            </div>
        </section>
    );
}
