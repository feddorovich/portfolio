import React, {FC} from 'react';
import style from './Main.module.css'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";
import ReactTypingEffect from 'react-typing-effect';
import mainPhoto from "../../assets/image/mainPhoto.jpg"

export const Main: FC = () => {
    return (
        <section className={style.mainBlock}>
            <Container>

                <div className={style.wrapper}>
                    <Animation animation={'animate__zoomIn'} threshold={0.1}>
                        <div className={style.photo}
                             style={{backgroundImage: `url(${mainPhoto})`}}
                        ></div>
                    </Animation>
                    <div className={style.text}>
                        <p>Welcome to my portfolio</p>
                        <p>Добро пожаловать на мой сайт</p>
                        <h1>I am Sergey Fedorovich</h1>
                        <ReactTypingEffect className={style.typingEffect} text="A front-end developer." speed={100} typingDelay={1000}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};