import React from 'react';
import './AsideSocial.css';

export default function AsideSocial() {
    return (
        <aside className='aside-social'>
            <ul>
                <li className='aside-social-linkedin'>
                    <a href='#'>
                        <span>Linkedin</span>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li className='aside-social-github'>
                    <a href='#'>
                        <span>Github</span>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li className='aside-social-email'>
                    <a href='#'>
                        <span>Email</span>
                        <i className='far fa-envelope'></i>
                    </a>
                </li>
                <li className='aside-social-resume'>
                    <a href='#'>
                        <span>Resume</span>
                        <i className='fas fa-file'></i>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
