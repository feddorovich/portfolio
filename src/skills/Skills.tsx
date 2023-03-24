import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'The quick brown fox jumps over the lazy dog, but the lazy dog just yawns and goes back to sleep.'}/>
                    <Skill title={'CSS'} description={'Life is like a camera. Focus on the good times, develop from the negatives, and if things don\'t work out, take another shot.'}/>
                    <Skill title={'React'} description={'In the middle of every difficulty lies opportunity.'}/>
                </div>
            </div>
        </div>
    );
};