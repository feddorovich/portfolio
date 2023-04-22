import React, {FC} from 'react';
import style from './Contacts.module.css'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";

export const Сontacts: FC = () => {
    return (
        <section className={style.contactsBlock} id={'contacts'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                        <h2 className={style.title}>Сontacts</h2>
                    </Animation>
                    <Animation animation={'animate__fadeInLeft'} threshold={0.4}>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name"/>

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email"/>

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows={5}></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </Animation>
                </div>
            </Container>
        </section>
    );
};