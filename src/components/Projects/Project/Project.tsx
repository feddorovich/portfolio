import React, {FC} from 'react';
import style from './Project.module.scss'
import {Animation} from "../../Animation/Animation";

type ProjectPropsType = {
    img: string
    title: string
    description: string
    src: string
}

export const Project: FC<ProjectPropsType> = (props) => {
    return (
        <Animation className={style.project} animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.photoWrapper}>
                <div className={style.photo}
                     style={{backgroundImage: `url(${props.img})`}}
                     onClick={() => window.open(props.src, '_blank')}>
                    <button className={style.btn}>View</button>
                </div>
            </div>
            <div className={style.text}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </Animation>
    );
};