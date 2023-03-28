import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";
import {Container} from "../container/Container";

export const Skills = () => {
    return (
        <section className={style.skillsBlock}>
            <Container>
                <div className={style.wrapper}>
                    <h2 className={style.title}>My Skills</h2>
                    <div className={style.skills}>
                        <Skill title={'JS'}
                               description={'The quick brown fox jumps over the lazy dog, but the lazy dog just yawns and goes back to sleep.'}/>
                        <Skill title={'CSS'}
                               description={'Life is like a camera. Focus on the good times, develop from the negatives, and if things don\'t work out, take another shot.'}/>
                        <Skill title={'React'} description={'In the middle of every difficulty lies opportunity.'}/>
                        <Skill title={'JS'}
                               description={'The quick brown fox jumps over the lazy dog, but the lazy dog just yawns and goes back to sleep.'}/>
                        <Skill title={'CSS'}
                               description={'Life is like a camera. Focus on the good times, develop from the negatives, and if things don\'t work out, take another shot.'}/>
                        <Skill title={'React'} description={'In the middle of every difficulty lies opportunity.'}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};