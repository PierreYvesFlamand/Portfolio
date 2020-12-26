import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p>
                    Email: <a href='mailto:pyflamand@gmail.com'>pyflamand@gmail.com</a>
                </p>
                <p>© 2020 Pierre-Yves Flamand | All Rights Reseved</p>
            </div>
        </footer>
    );
}
