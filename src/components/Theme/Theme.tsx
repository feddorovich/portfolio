import React, { useState, useEffect } from 'react';

const updateTheme = (theme: string) => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = ['bgPrimary', 'text'];
    components.forEach(c => {
        root.style.setProperty(
            `--${c}Default`,
            `var(--${c}${theme})`
        );
    });
};

const Theme: React.FC = () => {
    const [theme, setTheme] = useState<string>('Light');

    const changeTheme = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    };

    useEffect(() => {
        updateTheme(theme);
    }, [theme]);

    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
};

export default Theme;
