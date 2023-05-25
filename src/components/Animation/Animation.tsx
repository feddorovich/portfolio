import React, { FC, ReactNode, useState } from 'react'
import style from './Animation.module.scss'
import 'animate.css'
import { useInView } from 'react-intersection-observer'

type AnimationType = {
  children: ReactNode
  animation:
    | 'animate__fadeIn'
    | 'animate__fadeInUp'
    | 'animate__fadeInLeft'
    | 'animate__fadeInRight'
    | 'animate__zoomIn'
  threshold: number
  className?: string
}

export const Animation: FC<AnimationType> = ({ children, animation, threshold, className }) => {
  const [active, setActive] = useState(false)

  const { ref, inView } = useInView({
    threshold: threshold,
  })

  React.useEffect(() => {
    if (inView) {
      setActive(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={`${active ? `animate__animated ${animation} ${className}` : style.opacity}`}>
      {children}
    </div>
  )
}
