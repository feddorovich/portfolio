import React, { FC } from 'react'
import style from './Skills.module.scss'
import { Skill } from './Skill/Skill'
import { Container } from '../Container/Container'
import { Animation } from '../Animation/Animation'
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiAxios,
  SiJest,
  SiSass,
  SiStyledcomponents,
  SiStorybook,
  SiMui,
  SiTestcafe,
  SiVuedotjs,
  SiNextdotjs,
} from 'react-icons/si'
import { IconType } from 'react-icons/lib'

type SkillDataType = {
  Icon: IconType
  title: string
}

const skillData: SkillDataType[] = [
  { Icon: SiReact, title: 'React' },
  { Icon: SiRedux, title: 'Redux | Toolkit' },
  { Icon: SiJavascript, title: 'JavaScript' },
  { Icon: SiTypescript, title: 'TypeScript' },
  { Icon: SiNextdotjs, title: 'Next.js' },
  { Icon: SiVuedotjs, title: 'Vue' },
  { Icon: SiAxios, title: 'Axios' },
  { Icon: SiJest, title: 'Jest' },
  { Icon: SiSass, title: 'SASS' },
  // { Icon: SiStyledcomponents, title: 'Styled-Components' },
  { Icon: SiStorybook, title: 'StoryBook' },
  { Icon: SiMui, title: 'MUI' },
  { Icon: SiTestcafe, title: 'Unit-tests' },
]

export const Skills: FC = () => {
  return (
    <section className={style.skillsBlock} id={'skills'}>
      <Container>
        <div className={style.wrapper}>
          <Animation animation={'animate__fadeInUp'} threshold={0.4}>
            <div className={style.title}>
              <h3>What can I do?</h3>
              <h2>How I can help your next project</h2>
            </div>
          </Animation>
          <div className={style.skills}>
            {skillData.map((s, i) => {
              return <Animation key={i} animation={'animate__fadeInUp'} threshold={0.4}><Skill {...s} /></Animation>
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
