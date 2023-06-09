import React, { FC } from 'react'
import style from './Project.module.scss'
import { Animation } from '../../Animation/Animation'

type ProjectPropsType = {
  img: string
  title: string
  site?: string
  description: string
  src: string
}

const onClickHandle = (src: string) => {
  return () => window.open(src, '_blank')
}

export const Project: FC<ProjectPropsType> = (props) => {
  return (
    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
      <div className={style.project} >
        <div className={style.photoWrapper}>
          <div
            className={style.photo}
            style={{ backgroundImage: `url(${props.img})` }}
            onClick={onClickHandle(props.src)}
          >
            <button className={style.btn}>View</button>
          </div>
        </div>
        <div className={style.text}>
          <h3 onClick={onClickHandle(props.src)}>{props.title}</h3>
          <h4>{props.site}</h4>
          <p>{props.description}</p>
        </div>
        <div className={style.btnView} onClick={onClickHandle(props.src)}>
          <button>View</button>
        </div>
      </div>
    </Animation>
  )
}
