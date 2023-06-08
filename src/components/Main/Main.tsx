import React, { FC } from 'react'
import style from './Main.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'
import ReactTypingEffect from 'react-typing-effect'
import main from '../../assets/image/main.jpg'
import { FiArrowDownCircle } from 'react-icons/fi'

export const Main: FC = () => {
  return (
    <section className={style.mainBlock} id={'main'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__zoomIn'} threshold={0.1}>
            <div className={style.photo} style={{ backgroundImage: `url(${main})` }}></div>
          </Animation>
          <div className={style.text}>
            <h1>Hi, i'm Sergey Fedorovich</h1>
            <div className={style.typingEffect}>
              <ReactTypingEffect text={['developer', 'react dev']} speed={100} typingDelay={1000} />
            </div>
            <p>Welcome to my portfolio</p>
            {/*<div className={style.cv}>*/}
            {/*  <a href={'#projects'}><button>View works</button></a>*/}
            {/*  <a href={'/cv/FedorovichSergeyCV.pdf'} target={'_blank'}><h3>Download CV <FiArrowDownCircle /></h3></a>*/}
            {/*</div>*/}
          </div>
        </div>
        <a href={'#skills'}>
          <div className={style.arrow}>↓</div>
        </a>
      </Container>
    </section>
  )
}
