import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const navigate = useNavigate();
    const [state, handleSubmit] = useForm("meqykrgk");
    const [emailAlert, setEmailAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState(false);

    const handleValidation = (event) => {
        event.preventDefault();
        const { email, message } = event.target.elements;

        if (!email.value) {
            setEmailAlert(true);
            return;
        }
        setEmailAlert(false);

        if (!message.value) {
            setMessageAlert(true);
            return;
        }
        setMessageAlert(false);

        handleSubmit(event);
    };

    if (state.succeeded) {
        setTimeout(() => {
            navigate('/');
        }, 1500);
        return (
            <div className="grid" style={{height: '100vh'}}>
                <div></div>
                <p style={{ textAlign: 'center', paddingTop: '20px', fontSize: '30px' }} className="kode-mono">
                    Your message has been sent
                    <br />
                    Thank You!
                </p>
                <div></div>
            </div>
        );
    }

    return (
        <>
            <span className="material-symbols-outlined" style={{ fontSize: '40px', border: '2px solid #738678', bottom: '2px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                arrow_back
            </span>
            <div className='grid' style={{height: '100vh'}}>
                <div></div>
                <form onSubmit={handleValidation}>
                    <label htmlFor="email" className="kode-mono" style={{ textAlign: 'center' }}>
                        Enter Your Email Address
                    </label>
                    <input
                        placeholder="email"
                        id="email"
                        type="email"
                        name="email"
                        className='pico-color-jade-550'
                    />
                    {emailAlert && <p style={{ color: 'red' }}>Please provide your email address.</p>}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label htmlFor="message" className="kode-mono" style={{ textAlign: 'center' }}>
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="message"
                    />
                    {messageAlert && <p style={{ color: 'red' }}>Please provide your message.</p>}
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" className="contactbutton" disabled={state.submitting}>
                        Send
                    </button>
                </form>
                <div></div>
            </div>
        </>
    );
}

export default Contact;
