import React, {ReactNode, useState} from "react";
import style from "./Container.module.css";
import 'animate.css';
import {useInView} from "react-intersection-observer";

export const Container = ({children}: { children: ReactNode }) => {
    const [active, setActive] = useState(false)

    const {ref, inView} = useInView({
        threshold: 0.4
    })

    React.useEffect(() => {
        if (inView) {
            setActive(true)
        }
    }, [inView])

    return (
        <div className={style.container}>
            <div ref={ref} className={`${active ? 'animate__animated animate__fadeIn' : style.opacity}`}>
                {children}
            </div>
        </div>
    );
};