import React, { useState } from 'react';

import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className='contact' id='contactez-moi'>
            <div className='contact-container'>
                <h2 className='contact-header'>Contactez-Moi</h2>
                <form action='./contact.php' className='contact-form' method='POST'>
                    <label htmlFor='name'>
                        <i className='fas fa-user'></i>
                    </label>
                    <input
                        className={name.length > 0 ? 'hasValue' : null}
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Votre Nom'
                        autoComplete='false'
                        required
                        minLength={3}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor='email'>
                        <i className='fas fa-envelope'></i>
                    </label>
                    <input
                        className={email.length > 0 ? 'hasValue' : null}
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Votre E-mail'
                        autoComplete='false'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='message'>
                        <i className='fas fa-comment'></i>
                    </label>
                    <textarea
                        className={message.length > 0 ? 'hasValue' : null}
                        name='message'
                        id='message'
                        placeholder='Votre message...'
                        autoComplete='false'
                        required
                        maxLength={3000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <p>Votre adresse e-mail ne sera utilisée que pour vous répondre</p>
                    <button>Envoyer</button>
                </form>
            </div>
        </section>
    );
}
