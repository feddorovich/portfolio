import React, {FC} from 'react';
import './Burger.css';

type BurgerPropsType = {
    burger: boolean
    setBurger: (burger: boolean) => void
    onClick: () => void
}

export const Burger: FC<BurgerPropsType> = (props) => {
    const handleClick = () => {
        props.setBurger(!props.burger);
    };

    return (
        <div onClick={props.onClick}>
            <button className={`burger-button ${props.burger ? 'open' : ''}`} onClick={handleClick}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>
        </div>
    );
};