import React, { FC } from 'react'
import style from './Skill.module.scss'
import { Animation } from '../../Animation/Animation'
import { IconType } from 'react-icons/lib'
import { Tilt } from 'react-tilt'

export const Skill: FC<PropsType> = ({ title, Icon }) => {
  return (
    <Tilt options={{max: 30}}>
      <div className={style.skill}>
        <Icon className={style.icon} />
        <h3>{title}</h3>
      </div>
    </Tilt>
  )
}

type PropsType = {
  Icon: IconType
  title: string
}
