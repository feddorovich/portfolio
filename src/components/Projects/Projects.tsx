import React, {FC} from 'react';
import style from './Projects.module.css'
import {Container} from "../Container/Container";
import {Project} from "./Project/Project";
import {Animation} from "../Animation/Animation";

export const Projects: FC = () => {
    return (
        <section className={style.projectsBlock} id={'projects'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                        <div className={style.title}>
                            <h3>Portfolio</h3>
                            <h2>Some of my most recent project</h2>
                        </div>
                    </Animation>
                        <div className={style.projects}>
                            <Project img={'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'}
                                     title={'The Impact of Advancing Technology'}
                                     description={'Advancements in technology have revolutionized the way we live, work, and interact with each other. But it\'s important to remember that technology is a tool, and like any tool, it can be used for good or bad. We must strive to use technology to enhance our lives and benefit society as a whole, while also being mindful of its potential downsides.'}/>
                            <Project img={'https://look.com.ua/pic/201209/1400x1050/look.com.ua-27701.jpg'}
                                     title={'Balancing Technology and Well-Being'}
                                     description={'Today\'s technologies allow us to communicate and share information in real-time, work remotely, and simplify our lives. However, they can also have negative effects on our well-being if not used wisely and in moderation.'}/>
                            <Project img={'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'}
                                     title={'The Impact of Advancing Technology'}
                                     description={'Advancements in technology have revolutionized the way we live, work, and interact with each other. But it\'s important to remember that technology is a tool, and like any tool, it can be used for good or bad. We must strive to use technology to enhance our lives and benefit society as a whole, while also being mindful of its potential downsides.'}/>
                        </div>
                </div>
            </Container>
        </section>
    );
};