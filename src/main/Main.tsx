import React, {FC} from 'react';
import style from './Main.module.css'
import {Container} from "../container/Container";

export const Main: FC = () => {
    return (
            <section className={style.mainBlock}>
                <Container>
                <div className={style.wrapper}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Sergey Fedorovich</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={style.photo}>
                        photo
                    </div>
                </div>
                </Container>
            </section>
    );
};