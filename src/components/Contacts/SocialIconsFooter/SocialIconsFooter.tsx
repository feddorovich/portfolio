import React from 'react';
import style from './SocialIconsFooter.module.scss';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { SiCodewars } from 'react-icons/si';

export const SocialIconsFooter = () => {
    return (
        <div className={style.socialIcons}>
            <a href="https://github.com/feddorovich" target={'_blank'} className={style.iconLink}>
                <BsGithub className={style.git} />
            </a>
            <a href="https://t.me/feddorovich" target={'_blank'} className={style.iconLink}>
                <BsTelegram className={style.tg} />
            </a>
            <a href="https://www.linkedin.com/in/feddorovich/" target={'_blank'} className={style.iconLink}>
                <BsLinkedin className={style.link} />
            </a>
            <a href="https://www.codewars.com/users/feddorovich" target={'_blank'} className={style.iconLink}>
                <SiCodewars className={style.cd} />
            </a>
        </div>
    );
};
