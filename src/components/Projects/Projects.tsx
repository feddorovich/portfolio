import React, {FC} from 'react';
import style from './Projects.module.scss'
import {Container} from "../Container/Container";
import {Project} from "./Project/Project";
import {Animation} from "../Animation/Animation";
import portfolio from "../../assets/image/portfolio.png"

type ProjectsDataType = {
    img: string
    title: string
    description: string
    src: string
}

const projectsData: ProjectsDataType[] = [
    {
        img: portfolio,
        title: 'Portfolio',
        description: `This is my portfolio project built with TypeScript, React and SCSS for styling. 
        It's a web app showcasing my skills and projects in an interactive way, using a variety of customizable React 
        components. TypeScript ensures safer code, and SCSS simplifies style maintenance.`,
        src: 'https://github.com/feddorovich'
    },
    // {
    //     img: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
    //     title: 'The Impact of Advancing Technology',
    //     description: `Advancements in technology have revolutionized the way we live, work, and interact with each other.
    //     But it's important to remember that technology is a tool, and like any tool, it can be used for good or bad.
    //     We must strive to use technology to enhance our lives and benefit society as a whole,
    //     while also being mindful of its potential downsides.`,
    //     src: 'https://github.com/feddorovich'
    // },
    // {
    //     img: 'https://look.com.ua/pic/201209/1400x1050/look.com.ua-27701.jpg',
    //     title: 'Balancing Technology and Well-Being',
    //     description: `Today's technologies allow us to communicate and share information in real-time, work remotely,
    //     and simplify our lives. However, they can also have negative effects on our well-being if not used wisely and in moderation.`,
    //     src: 'https://github.com/feddorovich'
    // }
]

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
                        {projectsData.map((s, i) => {
                            return (
                                <Project key={i} {...s} />
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};