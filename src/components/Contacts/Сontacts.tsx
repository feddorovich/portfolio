import React, {FC} from 'react';
import style from './Contacts.module.css'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";
import {SocialIconsFooter} from "./SocialIconsFooter/SocialIconsFooter";

export const Contacts: FC = () => {
    return (
        <section className={style.contactsBlock} id={'contacts'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                        <div className={style.getInTouch}>
                            <h2>Let's get in touch</h2>
                            <p>Thank you for visiting my portfolio page! If you are looking for an experienced and talented front-end developer
                                who can help you create a unique and functional web interface, then you are in the right place.</p>
                            <p>
                                If you have any questions, comments, or proposals, please do not hesitate to contact me through
                                the contact form. I will be happy to discuss all the details.
                            </p>
                            <div className={style.icons}>
                                <SocialIconsFooter/>
                            </div>
                        </div>
                    </Animation>
                    <Animation animation={'animate__fadeInLeft'} threshold={0.4}>
                        <div className={style.form}>
                            <h2>Contact</h2>
                            <form>
                                <label htmlFor="name">What is Your Name:</label>
                                <input type="text" id="name" name="name"/>

                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" name="email"/>

                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows={5}></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </Animation>
                </div>
            </Container>
        </section>
    );
};