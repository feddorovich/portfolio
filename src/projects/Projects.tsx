import React, {FC} from 'react';
import style from './Projects.module.css'
import {Container} from "../container/Container";
import {Project} from "./project/Project";

export const Projects: FC = () => {
    return (
        <section className={style.projectsBlock}>
            <Container>
                <div className={style.wrapper}>
                    <h2 className={style.title}>My Projects</h2>
                    <div className={style.projects}>
                        <Project/>
                        <Project/>
                        <Project/>
                    </div>
                </div>
            </Container>
        </section>
    );
};