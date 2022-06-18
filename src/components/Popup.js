import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import close from '../img/close.svg';
import WorkNav from './sidebar/workNav';
import SkillsNav from '../components/skills/skillsNava';

const Popup = (props) => {
    const [work, setwork] = useState(false);
    const [skillSection, setskills] = useState(false);

    const toggleWork = () => {
        setwork(prev => !prev)
    }
    const toggleSills = () => {
        setskills(prev => !prev)
    }

    return (props.triger) ? (<div className='mobile__popup' >
        <div className="mobile__close">
            <h1>Debola <span>Adebanjo</span></h1>
            <img src={close} onClick={() => props.setTrigger(false)} alt="close icon" />
        </div>
        <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/radio'>Latest</NavLink></li>
            <li><NavLink to='/Gallery'>Gallery</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/project'>Upcoming</NavLink></li>
            <li><NavLink to='/about'>About me</NavLink></li>
        </ul>
    </div >) : "";
}
export default Popup;