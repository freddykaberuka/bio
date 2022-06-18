import React, { useState } from "react";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import medium from '../img/medium.svg';
import menu from '../img/menu.svg';
import classes from './About.module.css'

import SideBar from "../components/sideBar";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
const AboutPage = () => {
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
                <div className="home__header"><h1>About me</h1></div>
                <div className={classes.about__section}>
                    <div className={classes.about__image}>
                        <div className={classes.about__pic}>
                            <img src="https://debola.s3.eu-west-2.amazonaws.com/Image004_8c2e2dcda8.jpg" alt="debola" />
                        </div>
                        <div className={classes.about__resume}>
                            <Link to='/skills'>Skills</Link>
                            <Link to='/recomendation'>Recommendation</Link>
                            <Link to='/award'>Press and award</Link>
                            <Link to='/project'>Project & collabollattion</Link>
                            <Link to='http://google.com'>Checkout my resume</Link>

                        </div>
                    </div>
                    <div className={classes.about__text}>
                        <p >Hello, Debola is my name. I am currently undergoing a post graduate program ‘FIFA Master’ - an interdisciplinary course teaching the humanities, management and law of sports in three schools in the UK, Italy and Switzerland and ends in July 2022.

                            I also work with the British Broadcasting Corporation covering sports in Africa, here I report, present, and produce both underreported and mainstream stories while also performing in a role as the team's digital lead. I have also transferred these skills into bridging the gap between athletes and brands through sponsorships, marketing and communications.

                            Before joining the BBC in 2018, I worked as a freelance multimedia journalist covering Nigerian football across multiple platforms and with heavy inclination towards digital. I pioneered podcasting in Nigerian League Football, while working with the League Management Company — body in charge of the Nigerian Professional Football League providing digital content and engaging sports fans.

                            I self taught as an independent reporter covering matches around the men's national team, the Super Eagles, all through important qualifiers ahead of Russia 2018 and 2019 African Nations Cup qualifiers.

                            Prior to that, I performed in the role of a digital content strategist for a sports media firm, while also creating social media campaign strategies for brands such as Star Times and UAC PLC.

                            In the years before going digital, I was with the love of my life, radio, as a sports presenter, and producer on a Lagos based station 92.3 Inspiration FM. Here I immersed myself in audio production and started my first podcast, Indie Therapy— a music podcast for alternative emerging artist.

                            Starting out in 2012 as a freelancer in radio was vital to where I am now, why I hope to help others, especially young people get a foot in the door through my non-profit organization Media Masters. Meanwhile, Story Inn, a podcast production company aimed at telling African stories that touch remains my top priority to launch.

                            With these, I look forward to connecting and working with you to create great things.</p>
                    </div>
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
export default AboutPage;