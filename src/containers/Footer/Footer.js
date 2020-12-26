import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p>
                    Email: <a href='mailto:pyflamand@gmail.com'>pyflamand@gmail.com</a> • Tel:{' '}
                    <a href='tel:+32472235311'>+32 472 23 53 11</a>
                </p>
                <p>
                    <span style={{ fontSize: '1.1rem' }}>©</span> 2020 Pierre-Yves Flamand
                </p>
                <p>All Rights Reseved</p>
            </div>
        </footer>
    );
}
