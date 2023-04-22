import React, {FC, useState} from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {Container} from "../Container/Container";
import {Burger} from "../Burger/Burger";
import {SocialIcons} from "../../SocialIcons/SocialIcons";

export const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [burger, setBurger] = useState<boolean>(false);

    const onClickButtonHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <a href={'#main'}>
                            Logo
                        </a>
                    </div>
                    <div className={isMenuOpen ? style.mobileMenu : style.mainMenu}>
                        <Nav isMenuOpen={isMenuOpen}
                             setIsMenuOpen={setIsMenuOpen}
                             burger={burger}
                             setBurger={setBurger}
                        />
                    </div>
                    <div className={style.icons}>
                        <div className={style.mobileMenuButton}>
                            <Burger burger={burger}
                                    setBurger={setBurger}
                                    onClick={onClickButtonHandler}
                            />
                        </div>
                        <SocialIcons/>
                    </div>
                </div>
            </Container>
        </header>
    )
}