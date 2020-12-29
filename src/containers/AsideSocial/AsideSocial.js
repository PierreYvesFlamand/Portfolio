import React from 'react';
import './AsideSocial.css';

export default function AsideSocial() {
    return (
        <aside className='aside-social'>
            <ul>
                <li className='aside-social-linkedin'>
                    <a href='https://www.linkedin.com/in/pierreyvesflamand/' target='_blank' rel='noreferrer'>
                        <span>Linkedin</span>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li className='aside-social-github'>
                    <a href='https://github.com/pierreyvesflamand' target='_blank' rel='noreferrer'>
                        <span>Github</span>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li className='aside-social-email'>
                    <a href='mailto:contact@pierreyvesflamand.com'>
                        <span>Email</span>
                        <i className='far fa-envelope'></i>
                    </a>
                </li>
                <li className='aside-social-resume'>
                    <a href='CV_Pierre-Yves_Flamand.pdf' target='_blank' rel='noreferrer'>
                        <span>Mon CV</span>
                        <i className='fas fa-file'></i>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
