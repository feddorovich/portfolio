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
                        <Project img={''}
                                 title={'The Impact of Advancing Technology'}
                                 description={'Advancements in technology have revolutionized the way we live, work, and interact with each other. But it\'s important to remember that technology is a tool, and like any tool, it can be used for good or bad. We must strive to use technology to enhance our lives and benefit society as a whole, while also being mindful of its potential downsides.'}/>
                        <Project img={''}
                                 title={'Balancing Technology and Well-Being'}
                                 description={'Today\'s technologies allow us to communicate and share information in real-time, work remotely, and simplify our lives. However, they can also have negative effects on our well-being if not used wisely and in moderation.'}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};