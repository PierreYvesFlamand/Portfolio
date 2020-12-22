import React, { useRef, useState, useEffect } from 'react';
import './About.css';

export default function About() {
    const ref = useRef();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setFadeIn(true);
                observer.unobserve(ref.current);
            }
        });
        observer.observe(ref.current);

        return () => observer.unobserve(ref.current);
    }, []);

    return (
        <section className='about' id='about-me'>
            <div className={`about-container${fadeIn ? ' fade-in' : ''}`} ref={ref}>
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nulla aspernatur id
                    magnam rerum commodi quaerat enim dignissimos deserunt voluptatum!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, optio!</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nulla aspernatur id
                    magnam rerum commodi quaerat enim dignissimos deserunt voluptatum!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam officia odio!
                    Ipsum, quisquam perferendis neque architecto labore quo repellat iure placeat quae aperiam
                    fugit molestias incidunt impedit minus modi hic mollitia minima qui temporibus nihil
                    numquam. Sed facilis fugiat voluptatem reiciendis aspernatur cupiditate quisquam, unde
                    labore minima quibusdam. Omnis.
                </p>
            </div>
        </section>
    );
}
