import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import WorkNav from "./sidebar/workNav";
const SideBar = () => {
    const [work, setwork] = useState(false);
    const toggleWork = () => {
        setwork(prev => !prev)
    }
    return (
        <nav>
            <h1>Debola <span>Adebanjo</span></h1>
            <ul>
                <li><NavLink to='/home' >Home</NavLink></li>
                <li><NavLink to='/work' onClick={toggleWork}>Works</NavLink></li>
                <WorkNav isWork={work} />
                <li><NavLink to='/project'>Projects & collabolations</NavLink></li>
                <li><NavLink to='/skills'>Skills & recommendations</NavLink></li>
                <li><NavLink to='/award'>Press and awards</NavLink></li>
                <li><NavLink to='/about'>About me</NavLink></li>
                <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                <li><NavLink to='/business'>Let's work</NavLink></li>
            </ul>
        </nav>
    )

}
export default SideBar;