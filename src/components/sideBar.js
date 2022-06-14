import { NavLink } from "react-router-dom";
const SideBar = () => {
    return (
        <nav>
            <h1>Debola <span>Adebanjo</span></h1>
            <ul>
                <li><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/radio'>Latest</NavLink></li>
                <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/project'>Upcoming</NavLink></li>
                <li><NavLink to='/about'>About me</NavLink></li>
            </ul>
        </nav>
    )

}
export default SideBar;