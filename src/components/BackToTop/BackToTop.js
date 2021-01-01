import React, { useState } from 'react';
import './BackToTop.css';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    window.onscroll = () => {
        if (window.scrollY > 0 && !visible) {
            setVisible(true);
        } else if (window.scrollY === 0 && visible) {
            setVisible(false);
        }
    };

    return (
        <i
            className={`fas fa-sort-up backToTop ${visible ? 'show' : ''}`}
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        ></i>
    );
}
