import React, { useState } from "react";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import medium from '../img/medium.svg';
import menu from '../img/menu.svg';
import classes from './Contact.module.css'

import SideBar from "../components/sideBar";
import Popup from "../components/Popup";
const Contact = () => {
    const [onPopup, setOnPopup] = useState(false);

    return (
        <section>
            <div className="none"> <Popup triger={onPopup} setTrigger={setOnPopup} /> </div>
            <div className="sidebar"><SideBar /></div>
            <div className="mobile-nav">
                <h1>Debola <span>Adebanjo</span></h1>
                <img src={menu} onClick={() => setOnPopup(true)} alt="menu" />
            </div>

            <div className="home__base">
                <div className="home__header"><h1>Let's work</h1></div>
                <div className={classes.contact__section}>
                    <p>You can get in contact with me about telling a story, working on media projects,
                        speaking engagements, and more by sending me an email.</p>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                        <label htmlFor="about">About</label>
                        <input type="text" id="about" />
                        <label htmlFor="about">Message</label>
                        <textarea name="description" id="description"></textarea>
                        <button type="submit">submit</button>
                    </form>
                </div>
                <div className="work__footer">
                    <div className="home__social">
                        <ul>
                            <li><a href="#titer"><img src={linkedin} alt="Linkedin" ></img></a></li>
                            <li><a href="#titer"><img src={twitter} alt="twitter" ></img></a></li>
                            <li><a href="#titer"><img src={facebook} alt="facebook" ></img></a></li>
                            <li><a href="#titer"><img src={instagram} alt="instagram" ></img></a></li>
                            <li><a href="#titer"><img src={medium} alt="instagram" ></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Contact;