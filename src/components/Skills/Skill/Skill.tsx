import React, { FC } from 'react'
import style from './Skill.module.scss'
import { Animation } from '../../Animation/Animation'
import { IconType } from 'react-icons/lib'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

export const Skill: FC<PropsType> = ({ title, Icon }) => {
  return (
    <Tilt options={defaultOptions}>
      <Animation className={style.skill} animation={'animate__fadeInUp'} threshold={0.4}>
        <Icon className={style.icon} />
        <h3>{title}</h3>
      </Animation>
    </Tilt>
  )
}

type PropsType = {
  Icon: IconType
  title: string
}
