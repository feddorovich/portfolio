import React, {FC} from 'react';
import style from './Project.module.css'
import {Animation} from "../../Animation/Animation";

type PropsType = {
    img: string
    title: string
    description: string
}

export const Project: FC<PropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.photo} style={{backgroundImage: `url(${props.img})`}}>
                <button className={style.btn}>View</button>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};