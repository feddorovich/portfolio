import React, {FC, useState} from 'react';
import style from './Contacts.module.css'
import {Container} from "../Container/Container";

export const Сontacts: FC = () => {

    return (
        <section className={style.contactsBlock}>
            <Container>
                <div className={style.wrapper}>
                    <h2 className={style.title}>Сontacts</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"/>

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email"/>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={5}></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </Container>
        </section>
    );
};