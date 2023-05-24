import React, {FC, useRef, useState} from 'react';
import style from './Contacts.module.scss'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";
import {SocialIconsFooter} from "./SocialIconsFooter/SocialIconsFooter";
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {Alert} from "./Alert/Alert";

export const Contacts: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [isMessageEmpty, setIsMessageEmpty] = useState<boolean>(true)

    const form = useRef<HTMLFormElement>(null)

    const handleMessageChange = () => {
        if (form.current) {
            setIsMessageEmpty(form.current.message.value === '');
        }
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.current) {
            setIsLoading(true)
            emailjs.sendForm('service_zbupw4l', 'template_ulaar7c', form.current, 'J3VuL-G6B0KqO8oIH')
                .then((result: EmailJSResponseStatus) => {
                    // alert('Your message has been successfully delivered.')
                    setMessage('Your message has been successfully delivered.')
                    form.current?.reset()
                })
                .catch((error) => {
                    // alert('Error sending message. Write to feddorovich@outlook.com')
                    setMessage('Error sending message. Write to feddorovich@outlook.com.')
                })
                .finally(() => {
                    setIsLoading(false)
                    setIsMessageEmpty(true)
                })
        }
    }


    return (
        <section className={style.contactsBlock} id={'contacts'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInLeft'} threshold={0.4}>
                        <div className={style.getInTouch}>
                            <h2>Let's get in touch</h2>
                            <p>Thank you for visiting my portfolio page! If you are looking for an experienced and
                                talented front-end developer
                                who can help you create a unique and functional web interface, then you are in the right
                                place.</p>
                            <p>
                                If you have any questions, comments, or proposals, please do not hesitate to contact me
                                through
                                the contact form. I will be happy to discuss all the details.
                            </p>
                            <div className={style.icons}>
                                <SocialIconsFooter/>
                            </div>
                            <h3>
                                feddorovich@outlook.com
                            </h3>
                        </div>
                    </Animation>
                    <Animation animation={'animate__fadeInRight'} threshold={0.4}>
                        <div className={style.form}>
                            {isLoading && <div className={style.loadingWrapper}>
                                <div id={'hw15-loading'} className={style.loading}></div>
                            </div>}
                            <h2>Contact</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <label htmlFor="name">What is Your Name:</label>
                                <input type="text" id="name" name="name"/>

                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" name="email"/>

                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows={5} onChange={handleMessageChange}></textarea>

                                <button type="submit" disabled={isMessageEmpty}>Send</button>
                            </form>
                        </div>
                    </Animation>
                </div>
            </Container>
            <Alert message={message}/>
        </section>
    )
}