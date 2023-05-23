import React, {FC, useEffect, useState} from 'react';
import style from './Alert.module.scss';
import {BsXLg} from "react-icons/bs";

type AlertPropsType = {
    message: string
}

export const Alert: FC<AlertPropsType> = (props) => {
    const [message, setMessage] = useState<string>('')

    const handleClose = () => {
        setMessage('')
    }

    useEffect(() => {
        setMessage(props.message)
        const timer = setTimeout(() => {
            setMessage('')
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [props.message])

    if (!message) return null

    return (
        <div className={style.wrapper}>
            <div>{message}</div>
            <div onClick={handleClose} className={style.btn}><BsXLg/></div>
        </div>
    )
}