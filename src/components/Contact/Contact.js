import React, { useState, useContext } from 'react';
import './Contact.css';

import { DataContext } from '../../context/dataContext';

export default function Contact() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const { name, email, message, disclamer, button } = useContext(DataContext).data.contact;

    return (
        <section className='contact' id='contactez-moi'>
            <div className='contact-container'>
                <h2 className='contact-header'>Contactez-Moi</h2>
                <form action='./contact.php' className='contact-form' method='POST'>
                    <label htmlFor='name'>
                        <i className='fas fa-user'></i>
                    </label>
                    <input
                        className={nameInput.length > 0 ? 'hasValue' : null}
                        type='text'
                        name='name'
                        id='name'
                        placeholder={name}
                        autoComplete='false'
                        required
                        minLength={3}
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <label htmlFor='email'>
                        <i className='fas fa-envelope'></i>
                    </label>
                    <input
                        className={emailInput.length > 0 ? 'hasValue' : null}
                        type='email'
                        name='email'
                        id='email'
                        placeholder={email}
                        autoComplete='false'
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                    <label htmlFor='message'>
                        <i className='fas fa-comment'></i>
                    </label>
                    <textarea
                        className={messageInput.length > 0 ? 'hasValue' : null}
                        name='message'
                        id='message'
                        placeholder={message}
                        autoComplete='false'
                        required
                        maxLength={3000}
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <p>{disclamer}</p>
                    <button>{button}</button>
                </form>
            </div>
        </section>
    );
}
