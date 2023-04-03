import React, {FC} from 'react';
import style from './Footer.module.css'
import {Container} from "../Container/Container";

export const Footer: FC = () => {
    return (
        <header className={style.footer}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.footerNav}>
                        <div className={style.navItem}>Main</div>
                        <div className={style.navItem}>Skills</div>
                        <div className={style.navItem}>Projects</div>
                        <div className={style.navItem}>Contacts</div>
                    </div>

                </div>
            </Container>
            <div className={style.copyright}>
                <p>
                    <span>© {new Date().getFullYear()} </span>
                    <span><a target={'_blank'} href="https://github.com/feddorovich" rel="noreferrer">Sergey Fedorovich</a></span>
                </p>
            </div>
        </header>
    );
};