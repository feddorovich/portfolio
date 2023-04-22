import React, {FC, useState} from 'react';
import './Burger.css';

type BurgerPropsType = {
    onClick: () => void
}

export const Burger: FC<BurgerPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={props.onClick}>
            <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>
        </div>
    );
};