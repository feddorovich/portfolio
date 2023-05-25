import React from 'react'
import style from './SocialIcons.module.scss'
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import { Theme } from '../../Theme/Theme'

export const SocialIcons = () => {
  return (
    <div className={style.socialIcons}>
      <Theme />
      <a
        href="https://www.linkedin.com/in/feddorovich/"
        target={'_blank'}
        className={style.iconLink}
        aria-label={'Open Linkedin.com'}
      >
        <BsLinkedin className={style.link} />
      </a>
      <a
        href="https://github.com/feddorovich"
        target={'_blank'}
        className={style.iconLink}
        aria-label={'Open Github.com'}
      >
        <BsGithub className={style.git} />
      </a>
      <a
        href="https://t.me/feddorovich"
        target={'_blank'}
        className={style.iconLink}
        aria-label={'Open chat in Telegram'}
      >
        <BsTelegram className={style.tg} />
      </a>
      <a
        href="https://www.codewars.com/users/feddorovich"
        target={'_blank'}
        className={style.iconLink}
        aria-label={'Open Codewars.com'}
      >
        <SiCodewars className={style.cd} />
      </a>
    </div>
  )
}
