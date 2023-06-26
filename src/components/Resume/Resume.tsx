import React, { FC } from 'react'
import style from './Resume.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'

export const Resume: FC = () => {
  return (
    <section className={style.resumeBlock} id={'resume'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.title}>
              <h3>Resume</h3>
              <h2>A summary of My Resume</h2>
            </div>
          </Animation>
          <div className={style.resumes}>
            <div className={style.education}>
              <h2>My Education</h2>
              <div className={style.educationInfo}>
                <h3>Master in Computer Engineering</h3>
                <h4>Harvard University / 2015 - 2017</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  dummy text.
                </p>
              </div>
            </div>
            <div className={style.experience}>
              <h2>My Experience</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
