import React, {ReactNode} from "react";
import style from "./Container.module.css";

export const Container = ({children}: { children: ReactNode }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};