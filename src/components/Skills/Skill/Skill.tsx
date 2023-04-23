import React, {FC} from 'react';
import style from './Skill.module.css'
import {Animation} from "../../Animation/Animation";
import {IconType} from "react-icons/lib";

type PropsType = {
    Icon: IconType
    title: string
}

export const Skill: FC<PropsType> = ({title, Icon}) => {
    return (
        <Animation className={style.skill} animation={'animate__fadeInUp'} threshold={0.4}>
            <Icon className={style.icon}/>
            <h3>{title}</h3>
        </Animation>
    );
};