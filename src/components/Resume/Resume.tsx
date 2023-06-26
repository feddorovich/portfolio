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
          <Animation animation={'animate__fadeInUp'} threshold={0.4} className={style.resumes}>
            <div className={style.education}>
              <h2>My Education</h2>
              <div className={style.educationInfo}>
                <h3>Master in Economics</h3>
                <h4>Belarus State Economic University / 2017 - 2019</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  dummy text.
                </p>
                <hr/>
                <h3>Bachelor in Economics</h3>
                <h4>Belarus State Economic University / 2013 - 2017</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  dummy text.
                </p>
                <hr/>
              </div>
            </div>
            <div className={style.experience}>
              <h2>My Experience</h2>
              <div className={style.educationInfo}>
                <h3>Jr. Font End Developer</h3>
                <h4>telegif.com / 2022 - current</h4>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                </p>
                <hr/>
                <h3>Software Support Specialist</h3>
                <h4>sys.by / 2021 - 2022</h4>
                <p>
                  Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
                </p>
                <hr/>
              </div>
            </div>
          </Animation>
        </div>
      </Container>
    </section>
  )
}
