import React, {FC} from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {Container} from "../Container/Container";
import {NavLink} from "react-router-dom";

export const Header: FC = () => {

    const handleNavLinkClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <NavLink to={'/'}
                                 onClick={handleNavLinkClick}>
                            Logo
                        </NavLink>
                    </div>
                    <Nav/>
                    <div>Socials</div>
                </div>
            </Container>
        </header>
    )
}