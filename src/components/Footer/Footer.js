import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-contact'>
                    <p>
                        E-mail:{' '}
                        <a href='mailto:contact@pierreyvesflamand.com'>contact@pierreyvesflamand.com</a>
                    </p>
                    <p>
                        Tel: <a href='tel:+32472235311'>+32 472 23 53 11</a>
                    </p>
                </div>
                <p>
                    <span className='copy'>©</span> 2021 Pierre-Yves Flamand
                </p>
                <p>All Rights Reseved</p>
            </div>
        </footer>
    );
}
