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
            <li><NavLink  className='navlink' to='/' >Home</NavLink></li>
            <li onClick={toggleWork} className="work_li">Works</li>
            <WorkNav  className='navlink' isWork={work} />
            <li></li>
            <li><NavLink className='navlink'  to='/project'>Projects & collabolations</NavLink></li>
            <li onClick={toggleSills} className="work_li">Skills & recommendations</li>
            <SkillsNav className='navlink'  isSkills={skillSection} />
            <li></li>

            <li><NavLink className='navlink'  to='/award'>Press and awards</NavLink></li>
            <li><NavLink className='navlink'  to='/about'>About me</NavLink></li>
            <li><NavLink className='navlink'  to='/Gallery'>Gallery</NavLink></li>
            <li><NavLink className='navlink'  to='/contact'>Let's work</NavLink></li>
        </ul>
    </div>) : "";
}
export default Popup;