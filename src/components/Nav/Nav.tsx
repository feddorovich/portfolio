import React, {FC, useEffect, useState} from 'react';
import style from './Nav.module.css'

type NavPropsType = {
    isMenuOpen: boolean
    setIsMenuOpen: (isMenuOpen: boolean) => void
    burger: boolean
    setBurger: (burger: boolean) => void
}

export const Nav: FC<NavPropsType> = (props) => {
    const [active, setActive] = useState(document.location.href.split('#')[1])

    const onChangeActiveLink = (value: string) => () => {
        setActive(value)
        props.setIsMenuOpen(false)
        props.setBurger(false)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {!props.isMenuOpen
            ?
            <nav className={style.nav}>
                <a className={active === 'main' ? style.active : style.link} href={'#main'}
                   onClick={onChangeActiveLink('main')}>Main</a>
                <a className={active === 'skills' ? style.active : style.link} href={'#skills'}
                   onClick={onChangeActiveLink('skills')}>Skills</a>
                <a className={active === 'projects' ? style.active : style.link} href={'#projects'}
                   onClick={onChangeActiveLink('projects')}>Projects</a>
                <a className={active === 'contacts' ? style.active : style.link} href={'#contacts'}
                   onClick={onChangeActiveLink('contacts')}>Contacts</a>
            </nav>
                :
                <nav className={style.navMobile}>
                    <a className={active === 'main' ? style.activeMobile : style.linkMobile} href={'#main'}
                       onClick={onChangeActiveLink('main')}>Main</a>
                    <a className={active === 'skills' ? style.activeMobile : style.linkMobile} href={'#skills'}
                       onClick={onChangeActiveLink('skills')}>Skills</a>
                    <a className={active === 'projects' ? style.activeMobile : style.linkMobile} href={'#projects'}
                       onClick={onChangeActiveLink('projects')}>Projects</a>
                    <a className={active === 'contacts' ? style.activeMobile : style.linkMobile} href={'#contacts'}
                       onClick={onChangeActiveLink('contacts')}>Contacts</a>
                </nav>
            }
        </div>
    );
};