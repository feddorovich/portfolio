import React, {FC} from 'react';
import style from './Main.module.css'

export const Main: FC = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Sergey Fedorovich</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>
                    photo
                </div>
            </div>
        </div>
    );
};