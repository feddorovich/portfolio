import React, {FC} from 'react';
import style from './Footer.module.css'
import {Container} from "../Container/Container";

export const Footer: FC = () => {
    return (
        <header className={style.footer}>
            <Container>
                <div className={style.wrapper}>
                    <h2 className={style.title}>Sergey Fedorovich</h2>
                    <div className={style.footerNav}>
                        <div className={style.navItem}>1</div>
                        <div className={style.navItem}>2</div>
                        <div className={style.navItem}>3</div>
                        <div className={style.navItem}>4</div>
                    </div>
                </div>
            </Container>
        </header>
    );
};