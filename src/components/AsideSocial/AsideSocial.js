import React, { useContext } from 'react';
import './AsideSocial.css';

import { DataContext } from '../../context/dataContext';

export default function AsideSocial() {
    const data = useContext(DataContext).data.asideSocial;

    return (
        <aside className='aside-social'>
            <ul>
                <li className='linkedin'>
                    <a href={data[0].link} target='_blank' rel='noreferrer'>
                        <span>{data[0].text}</span>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li className='github'>
                    <a href={data[1].link} target='_blank' rel='noreferrer'>
                        <span>{data[1].text}</span>
                        <i className='fab fa-github'></i>
                    </a>
                </li>
                <li className='email'>
                    <a href={data[2].link}>
                        <span>{data[2].text}</span>
                        <i className='far fa-envelope'></i>
                    </a>
                </li>
                <li className='resume'>
                    <a href={data[3].link} target='_blank' rel='noreferrer'>
                        <span>{data[3].text}</span>
                        <i className='fas fa-file'></i>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
