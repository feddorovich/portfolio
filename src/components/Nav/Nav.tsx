import React, {FC,  useState} from 'react';
import style from './Nav.module.css'

export const Nav: FC = () => {
    const [active, setActive] = useState<any>(document.location.href.split('#')[1])

    const onChangeActiveLink = (value: string) => () => {
        setActive(value)
    }

    return (
        <nav className={style.nav}>
            <a className={active === 'main' ? style.active : style.link} href={'#main'}
               onClick={onChangeActiveLink('main')}>Main</a>
            <a className={active === 'skills' ? style.active : style.link} href={'#skills'}
               onClick={onChangeActiveLink('skills')}>Skills</a>
            <a className={active === 'projects' ? style.active : style.link} href={'#projects'}
               onClick={onChangeActiveLink('projects')}>Projects</a>
            <a className={active === 'contacts' ? style.active : style.link} href={'#contacts'}
               onClick={onChangeActiveLink('contacts')}>Сontacts</a>
        </nav>
    );
};