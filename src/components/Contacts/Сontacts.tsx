import React, {FC} from 'react';
import style from './Contacts.module.css'
import {Container} from "../Container/Container";

export const Сontacts: FC = () => {
    return (
        <section className={style.contactsBlock}>
            <Container>
                <div className={style.wrapper}>
                    Contacts
                </div>
            </Container>
        </section>
    );
};