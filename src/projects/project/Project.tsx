import React, {FC} from 'react';
import style from './Project.module.css'

type PropsType = {
    img: string
    title: string
    description: string
}

export const Project: FC<PropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.photo}>IMAGE</div>
            {/*<button>BUTTON</button>*/}
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};