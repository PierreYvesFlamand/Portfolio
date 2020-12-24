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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio eum tempore
                    architecto, labore incidunt blanditiis nostrum reiciendis doloribus illo debitis, sequi
                    voluptatem eveniet impedit repellendus. Animi, expedita tenetur! Voluptatem deserunt illo,
                    aperiam iste nostrum repellendus cupiditate asperiores distinctio, tempora eum molestiae
                    et. Nesciunt suscipit consectetur unde repudiandae aliquam repellendus!
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab suscipit amet pariatur. Id,
                    sit non!
                </p>
            </div>
        </section>
    );
}
