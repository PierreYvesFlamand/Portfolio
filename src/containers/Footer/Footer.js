import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p>
                    <span>
                        Email:{' '}
                        <a href='mailto:contact@pierreyvesflamand.com'>contact@pierreyvesflamand.com</a>{' '}
                    </span>{' '}
                    <span>
                        {' '}
                        Tel: <a href='tel:+32472235311'>+32 472 23 53 11</a>
                    </span>
                </p>
                <p>© 2020 Pierre-Yves Flamand</p>
                <p>All Rights Reseved</p>
            </div>
        </footer>
    );
}
