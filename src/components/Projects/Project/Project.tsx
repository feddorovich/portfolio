import React, {FC} from 'react';
import style from './Project.module.scss'
import {Animation} from "../../Animation/Animation";

type ProjectPropsType = {
    img: string
    title: string
    description: string
    src: string
}

const onClickHandle = (src: string) => {
    return () => window.open(src, '_blank')
}

export const Project: FC<ProjectPropsType> = (props) => {
    return (
        <Animation className={style.project} animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.photoWrapper}>
                <div className={style.photo}
                     style={{backgroundImage: `url(${props.img})`}}
                     onClick={onClickHandle(props.src)}>
                    <button className={style.btn}>View</button>
                </div>
            </div>
            <div className={style.text}>
                <h3 onClick={onClickHandle(props.src)}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={style.btnView} onClick={onClickHandle(props.src)}>
                <button>View</button>
            </div>
        </Animation>
    )
}