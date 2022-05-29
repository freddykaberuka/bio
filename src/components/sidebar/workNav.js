import React from 'react';
import { NavLink } from 'react-router-dom';
const WorkNav = (props) => {
    return (props.isWork === true) ? (<ul>
        <li><NavLink to='/Radio'>Radio</NavLink></li>
        <li><NavLink to='/arena'>Kigali arena</NavLink></li>
    </ul>) : '';
}
export default WorkNav;