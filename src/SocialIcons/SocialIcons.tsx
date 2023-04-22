import React from 'react';
import style from './SocialIcons.module.css';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { SiCodewars } from 'react-icons/si';

export const SocialIcons = () => {
    return (
        <div className={style.socialIcons}>
            <a href="https://github.com" target={'_blank'} className={style.iconLink}>
                <BsGithub className={style.git} />
            </a>
            <a href="https://telegram.org" target={'_blank'} className={style.iconLink}>
                <BsTelegram className={style.tg} />
            </a>
            <a href="https://www.linkedin.com" target={'_blank'} className={style.iconLink}>
                <BsLinkedin className={style.link} />
            </a>
            <a href="https://www.codewars.com" target={'_blank'} className={style.iconLink}>
                <SiCodewars className={style.cd} />
            </a>
        </div>
    );
};
