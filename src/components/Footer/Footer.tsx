import React, { FC } from 'react'
import style from './Footer.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <Animation animation={'animate__fadeInLeft'} threshold={0.1} >
          <div className={style.wrapper}>
            <div className={style.copyright}>
              {`© ${new Date().getFullYear()} `}
              <a target={'_blank'} href='https://github.com/feddorovich' rel='noreferrer'>
                Sergey Fedorovich
              </a>
              {`. All Rights Reserved.`}
            </div>
            <div className={style.status}>Lose Yourself to Dance 💃</div>
          </div>
        </Animation>
      </Container>
    </footer>
  )
}
