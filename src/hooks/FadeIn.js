import { useRef, useState, useEffect } from 'react';

export default function FadeIn() {
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

    return [ref, fadeIn];
}
