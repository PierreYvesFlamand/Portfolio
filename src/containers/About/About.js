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
                    Développeur de 24 ans pationné d'algorithmie et du web depuis 2 ans. Je suis actuellement
                    en formation en cours du soir à Saint Laurent. Téléchargez mon CV ici (kb)
                </p>
                <p>
                    Html5, Css3 et Js(ES6) sont les piliés de mes compétences. Ils m'ont permis de créer des
                    sites responsives et plusieurs projets plus orientés Javascript.
                </p>
            </div>
        </section>
    );
}
