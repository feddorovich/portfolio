import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Container} from "../container/Container";

type SkillDataType = {
    id: number
    title: string
    description: string
}

const skillData: SkillDataType[] = [
    {id: 1,title: 'JS', description: 'The quick brown fox jumps over the lazy dog, but the lazy dog just yawns and goes back to sleep.'},
    {id: 2,title: 'CSS', description: 'Life is like a camera. Focus on the good times, develop from the negatives, and if things don\'t work out, take another shot.'},
    {id: 3,title: 'React', description: 'In the middle of every difficulty lies opportunity.'},
    {id: 4,title: 'JS', description: 'The quick brown fox jumps over the lazy dog, but the lazy dog just yawns and goes back to sleep.'},
    {id: 5,title: 'CSS', description: 'Life is like a camera. Focus on the good times, develop from the negatives, and if things don\'t work out, take another shot.'},
    {id: 6,title: 'React', description: 'In the middle of every difficulty lies opportunity.'}
]

export const Skills = () => {
    return (
        <section className={style.skillsBlock}>
            <Container>
                <div className={style.wrapper}>
                    <h2 className={style.title}>My Skills</h2>
                    <div className={style.skills}>
                        {skillData.map(s => {
                            return (
                                <Skill key={s.id} title={s.title} description={s.description}/>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};