import React, {FC} from 'react';
import style from './Footer.module.css'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";

export const Footer: FC = () => {
    return (
        <header className={style.footer}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                        <div className={style.footerNav}>
                            <div className={style.navItem}>Main</div>
                            <div className={style.navItem}>Skills</div>
                            <div className={style.navItem}>Projects</div>
                            <div className={style.navItem}>Contacts</div>
                        </div>
                    </Animation>
                </div>
            </Container>
            <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                <div className={style.copyright}>
                    <p>
                        <span>© {new Date().getFullYear()} </span>
                        <span><a target={'_blank'} href="https://github.com/feddorovich" rel="noreferrer">Sergey Fedorovich</a></span>
                    </p>
                </div>
            </Animation>
        </header>
    );
};