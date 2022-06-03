import React from 'react';
import { NavLink } from 'react-router-dom';
const skillsNav = (props) => {
    return (props.isSkills === true) ? (<ul>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/recomendation'>Recomendation</NavLink></li>
    </ul>) : '';
}
export default skillsNav;