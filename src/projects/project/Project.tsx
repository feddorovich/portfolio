import React, {FC} from 'react';
import style from './Project.module.css'

type PropsType = {
    img: string
    title: string
    description: string
}

export const Project: FC = () => {
    return (
        <div className={style.project}>
            Project
        </div>
    );
};