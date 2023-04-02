import React, {FC} from 'react';
import style from './Footer.module.css'
import {Container} from "../Container/Container";

export const Footer: FC = () => {
    return (
        <header className={style.footer}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.footerNav}>
                        <div className={style.navItem}>1</div>
                        <div className={style.navItem}>2</div>
                        <div className={style.navItem}>3</div>
                        <div className={style.navItem}>4</div>
                    </div>
                    <p>
                        <span>© {new Date().getFullYear()} </span>
                        <span><a target={'_blank'} href="https://www.example.com/">Sergey Fedorovich</a></span>
                    </p>
                </div>
            </Container>
        </header>
    );
};