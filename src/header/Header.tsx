import React, {FC} from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import {Container} from "../container/Container";

export const Header: FC = () => {
    return (
        <header className={style.wrapper}>
            <Container>
                <div className={style.header}>
                    <Nav/>
                </div>
            </Container>
        </header>
    );
};