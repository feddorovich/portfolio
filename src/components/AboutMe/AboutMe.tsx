import React from 'react'
import style from './AboutMe.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'

export const AboutMe = () => {
  return (
    <section className={style.aboutMeBlock} id={'skills'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.title}>
              <h3>About Me</h3>
              <h2>Know Me More</h2>
            </div>
          </Animation>
          <Animation animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.infoBlock}>
              <div>
                <span className={style.name}>Hi, I'm</span>
                <p>
                  I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick
                  websites that provide real value to the end user. Thousands of clients have procured exceptional
                  results while working with me. Delivering work within time and budget which meets client’s
                  requirements is our moto.
                </p>
              </div>
              <div className={style.numbers}>
                <div className={style.number}>2</div>
                <div className={style.circle}></div>
                <div className={style.numberText}>Years of Experience</div>
              </div>
            </div>
          </Animation>
          <Animation animation={'animate__fadeInUp'} threshold={0.1}>
            <div className={style.personalBlock}>
              <div>
                <div>Name</div>
                <div>Callum Smith</div>
              </div>
              <div>
                <div>Email:</div>
                <div>feddorovich@outlook.com</div>
              </div>
              <div>
                <div>Date of birth:</div>
                <div>01 October, 1995</div>
              </div>
              <div>
                <div>From:</div>
                <div>Minsk, Belarus</div>
              </div>
            </div>
          </Animation>
        </div>
      </Container>
    </section>
  )
}
