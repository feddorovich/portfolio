import React, {FC, useEffect, useState} from 'react'
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
                        setActive(entry.target.id)
                    }
                })
            },
            {threshold: 0.3}
        );

        const sections = document.querySelectorAll('section')
        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const navData = [
        {link: 'main', name: 'Main'},
        {link: 'skills', name: 'Skills'},
        {link: 'projects', name: 'Projects'},
        {link: 'contacts', name: 'Contacts'}
    ]

    return (
        <div>
            {!props.isMenuOpen
                ?
                <nav className={style.nav}>
                    {
                        navData.map((a, i) => {
                            return (
                                <a key={i} className={active === a.link ? style.active : style.link} href={`#${a.link}`}
                                   onClick={onChangeActiveLink(a.link)}>{a.name}</a>
                            )
                        })
                    }
                </nav>
                :
                <nav className={style.navMobile}>
                    {
                        navData.map((a, i) => {
                            return (
                                <a key={i} className={active === a.link ? style.activeMobile : style.linkMobile} href={`#${a.link}`}
                                   onClick={onChangeActiveLink(a.link)}>{a.name}</a>
                            )
                        })
                    }
                </nav>
            }
        </div>
    );
};