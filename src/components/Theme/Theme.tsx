import React, {useState, useEffect} from 'react'
import style from './Theme.module.scss'
import {BsMoon, BsSun} from "react-icons/bs";

const updateTheme = (theme: string) => {
    const root = document.querySelector(':root') as HTMLElement

    const components = ['bgPrimary', 'text', 'bgSecondary', 'textSecondary', 'boxShadow', 'icons', 'buttons']
    components.forEach(c => {
        root.style.setProperty(
            `--${c}Default`,
            `var(--${c}${theme})`
        )
    })
}

export const Theme: React.FC = () => {
    useEffect(() => {
        let localStorageDarkMode = localStorage.getItem('darkMode')
        if (localStorageDarkMode !== null) {
            setTheme(JSON.parse(localStorageDarkMode))
        }
    }, [])

    const [theme, setTheme] = useState<string>('Light')

    const changeTheme = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light')
    };

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(theme))
        updateTheme(theme)
    }, [theme])

    return (
        <div onClick={changeTheme} className={style.icon}>
            {theme === 'Light' ? <BsMoon/> : <BsSun/>}
        </div>
    )
}
