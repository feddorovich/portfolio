import React, {useState, useEffect, ReactNode} from 'react'
import style from './Theme.module.scss'

type ThemeType = {
    children: ReactNode
}

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

export const Theme: React.FC<ThemeType> = ({children}) => {
    const [theme, setTheme] = useState<string>('Light')

    const changeTheme = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light')
    };

    useEffect(() => {
        updateTheme(theme)
    }, [theme])

    return (
        <div onClick={changeTheme}>
            {children}
        </div>
    )
}
