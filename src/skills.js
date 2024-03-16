import React from "react";
import Progress from "./prograssbar";

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Photoshop", "Adobe XD", "Nodejs", "WordPress"];
    const percentages = [90, 90, 80, 80, 90, 80, 70, 60];
    return (
        <>
            {skills.map((skill, index) => (
                <Progress key={index} skill={skill} percent={percentages[index]} />
            ))}
        </>
    );

}

export default Skills