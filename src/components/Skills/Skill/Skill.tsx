import React, {FC} from 'react';
import style from './Skill.module.css'
import {Animation} from "../../Animation/Animation";

type PropsType = {
    title: string
    description: string
}

export const Skill: FC<PropsType> = (props) => {
    return (
        <Animation className={style.skill} animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Animation>
    );
};