import React, {FC} from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {Container} from "../Container/Container";

export const Header: FC = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <a href={'#main'}>
                            Logo
                        </a>
                    </div>
                    <Nav/>
                    <div>Socials</div>
                </div>
            </Container>
        </header>
    )
}