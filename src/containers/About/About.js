import React, { useRef, useState, useEffect } from 'react';
import './About.css';

export default function About() {
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
        <section className='about' id='about-me'>
            <div className={`about-container${fadeIn ? ' fade-in' : ''}`} ref={ref}>
                <h2>About me</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil neque velit pariatur ad
                    eos! Autem veritatis tempora totam! In unde laborum quo, sint ab possimus facere numquam
                    esse, a consequatur iusto asperiores dolores, voluptates laboriosam quos eos. Unde,
                    deserunt. Ipsam ad unde repellat impedit quasi, porro vitae autem harum debitis!
                </p>
            </div>
        </section>
    );
}
