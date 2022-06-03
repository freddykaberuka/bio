import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WorkNav from "./sidebar/workNav";
import SkillsNav from "./skills/skillsNava";
const SideBar = () => {
    const [work, setwork] = useState(false);
    const [skillSection, setskills] = useState(false);

    const toggleWork = () => {
        setwork(prev => !prev)
    }
    const toggleSills = () => {
        setskills(prev => !prev)
    }
    return (
        <nav>
            <h1>Debola <span>Adebanjo</span></h1>
            <ul>
                <li><NavLink to='/' >Home</NavLink></li>
                <li onClick={toggleWork} className="work_li">Works</li>
                <WorkNav isWork={work} />
                <li></li>
                <li><NavLink to='/project'>Projects & collabolations</NavLink></li>
                <li onClick={toggleSills} className="work_li">Skills & recommendations</li>
                <SkillsNav isSkills={skillSection} />
                <li></li>

                <li><NavLink to='/award'>Press and awards</NavLink></li>
                <li><NavLink to='/about'>About me</NavLink></li>
                <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                <li><NavLink to='/contact'>Let's work</NavLink></li>
            </ul>
        </nav>
    )

}
export default SideBar;