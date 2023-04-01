import React, {FC} from 'react';
import style from './Main.module.css'
import {Container} from "../Container/Container";

export const Main: FC = () => {
    return (
            <section className={style.mainBlock}>
                <Container>
                <div className={style.wrapper}>
                    <div className={style.text}>
                        <span>Welcome to my portfolio</span>
                        <h1>I am Sergey Fedorovich</h1>
                        <p>A front-end developer</p>
                    </div>
                    <div className={style.photo}>

                    </div>
                </div>
                </Container>
            </section>
    );
};