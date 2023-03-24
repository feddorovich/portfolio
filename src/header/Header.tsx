import React, {FC} from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";

export const Header: FC = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};