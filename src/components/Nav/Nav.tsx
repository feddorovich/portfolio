import React, {FC} from 'react';
import style from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav: FC = () => {
    return (
        <nav className={style.nav}>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/'}>Skills</NavLink>
            <NavLink to={'/'}>Projects</NavLink>
            <NavLink to={'/'}>Сontacts</NavLink>
        </nav>
    );
};