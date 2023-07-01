import React, { FC } from 'react'
import style from './Resume.module.scss'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'

export const Resume: FC = () => {
  return (
    <section className={style.resumeBlock} id={'resume'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__fadeInUp'} threshold={0.2}>
            <div className={style.title}>
              <h3>Resume</h3>
              <h2>A summary of My Resume</h2>
            </div>
          </Animation>
          <div className={style.resumes}>
            <Animation animation={'animate__fadeInUp'} threshold={0.3}>
              <div className={style.education}>
                <h2>My Education</h2>
                <div className={style.educationInfo}>
                  <h3>Master in Economics</h3>
                  <h4>Belarus State Economic University / 2017 - 2019</h4>
                  <p>
                    Completion of Master's degree in Economics. Gained knowledge and expertise in various economic
                    theories, quantitative analysis, and statistical modeling.
                  </p>
                  <hr />
                  <h3>Bachelor in Economics</h3>
                  <h4>Belarus State Economic University / 2013 - 2017</h4>
                  <p>Actively engaging in research projects and academic conferences. Received Headmaster's award.</p>
                  <hr />
                </div>
              </div>
            </Animation>
            <Animation animation={'animate__fadeInUp'} threshold={0.3}>
              <div className={style.experience}>
                <h2>My Experience</h2>
                <div className={style.experienceInfo}>
                  <h3>Jr. Font End Developer</h3>
                  <h4>telegif.com / 2022 - current</h4>
                  <p>
                    Experience working with React, Redux, TypeScript, developing complex web applications, and
                    optimizing user interfaces
                  </p>
                  <hr />
                  <h3>IT Mentorship and Teaching Experience</h3>
                  <h4>it-incubator.io / 2022 - current</h4>
                  <p>
                    Mentored in JavaScript, React and Redux, providing guidance and support. Conducted interactive
                    teaching sessions, explaining complex concepts clearly.
                  </p>
                  <hr />
                  <h3>Software Support Specialist</h3>
                  <h4>sys.by / 2021 - 2022</h4>
                  <p>
                    Writing technical specifications, provided technical assistance and resolved software-related issues
                    for users.
                  </p>
                  <hr />
                </div>
              </div>
            </Animation>
          </div>
          <Animation animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.button}>
              <a href="https://fedrr.com/cv/FedorovichSergeyCV.pdf" target={'_blank'}>
                <button>Download CV</button>
              </a>
            </div>
          </Animation>
        </div>
      </Container>
    </section>
  )
}
