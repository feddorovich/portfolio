import React, {FC} from 'react';
import style from './Main.module.css'
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";
import ReactTypingEffect from 'react-typing-effect';
import mainPhoto from "../../assets/image/mainPhoto.jpg"

export const Main: FC = () => {
    return (
        <section className={style.mainBlock} id={'main'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__zoomIn'} threshold={0.1}>
                        <div className={style.photo}
                             style={{backgroundImage: `url(${mainPhoto})`}}
                        ></div>
                    </Animation>
                    <div className={style.text}>
                        <h1>Hi, i'm Sergey Fedorovich</h1>
                        <div className={style.typingEffect} >
                            <ReactTypingEffect text={["developer", 'frontend dev']} speed={100} typingDelay={1000} />
                        </div>
                        <p>Welcome to my portfolio</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};