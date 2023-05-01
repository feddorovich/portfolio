import React, {FC} from 'react';
import style from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Container} from "../Container/Container";
import {Animation} from "../Animation/Animation";
import {
    SiReact, SiRedux, SiJavascript, SiTypescript, SiAxios, SiJest, SiSass,
    SiStyledcomponents, SiStorybook, SiMui, SiTestcafe
} from "react-icons/si";
import {IconType} from "react-icons/lib";

type SkillDataType = {
    id: number
    Icon: IconType
    title: string
}

const skillData: SkillDataType[] = [
    {
        id: 1,
        Icon: SiReact,
        title: 'React'
    },
    {
        id: 2,
        Icon: SiRedux,
        title: 'Redux'
    },
    {
        id: 3,
        Icon: SiJavascript,
        title: 'JavaScript'
    },
    {
        id: 4,
        Icon: SiTypescript,
        title: 'TypeScript'
    },
    {
        id: 5,
        Icon: SiAxios,
        title: 'Axios'
    },
    {
        id: 6,
        Icon: SiJest,
        title: 'Jest'
    },
    {
        id: 7,
        Icon: SiSass,
        title: 'SASS'
    },
    {
        id: 8,
        Icon: SiStyledcomponents,
        title: 'Styled-Components'
    },
    {
        id: 9,
        Icon: SiStorybook,
        title: 'StoryBook'
    },
    {
        id: 10,
        Icon: SiMui,
        title: 'MUI'
    },
    {
        id: 11,
        Icon: SiTestcafe,
        title: 'Unit-tests'
    },
]

export const Skills:FC = () => {
    return (
        <section className={style.skillsBlock} id={'skills'}>
            <Container>
                <div className={style.wrapper}>
                    <Animation animation={'animate__fadeInUp'} threshold={0.4}>
                        <div className={style.title}>
                            <h3>What can I do?</h3>
                            <h2>How I can help your next project</h2>
                        </div>
                    </Animation>
                    <div className={style.skills}>
                        {skillData.map(s => {
                            return (
                                <Skill key={s.id} {...s} />
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};