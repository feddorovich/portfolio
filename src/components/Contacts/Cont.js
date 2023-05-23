import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a4thxrn', 'template_ulaar7c', form.current, 'J3VuL-G6B0KqO8oIH')
            .then((result) => {
                alert('Your message has been sent successfully.')

                // console.log(result.text);
                form.current.reset();
            }, (error) => {
                alert('Error sending message. Write to feddorovich@outlook.com')
                // console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};