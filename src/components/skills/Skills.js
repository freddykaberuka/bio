import React, { useState } from "react";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
import medium from '../../img/medium.svg';
import menu from '../../img/menu.svg';
import style from './Skills.module.css';

import SideBar from "../sideBar";
import Popup from "../Popup";
const Skills = (props) => {
    const [onPopup, setOnPopup] = useState(false);

    return (
        <section className="work_section">
            <div className="none"> <Popup triger={onPopup} setTrigger={setOnPopup} /> </div>
            <div className="sidebar"><SideBar /></div>
            <div className="mobile-nav">
                <h1>Debola <span>Adebanjo</span></h1>
                <img src={menu} onClick={() => setOnPopup(true)} alt="menu" />
            </div>

            <div className="home__base">
                <div className="home__header"><h1>Skills</h1></div>
                <div className={style.award__section}>
                    <h1 className={style.award__title}>Professional</h1>
                    <ul className={style.award__ul}>
                        <li className={style.award__list}><a href="https://open.spotify.com/episode/14lnQxpnXEbUrIsgMf2T3C" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">Debola Adebanjo: On creating your own opportunities and being an international journalist</a></li>
                        <li className={style.award__list}><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iZmZmMmMwL3BvZGNhc3QvcnNz/episode/YjdlNDQ5NzgtOTkwOC00ODE0LWJhYWUtMmMxZjk3MjIyODA3" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">The Hindsight Pod: Nigerian Women's League, CAF &amp; More With Debola.</a></li>
                        <li className={style.award__list}><a href="https://anchor.fm/first-x-minutes/episodes/Ep--97-5-Key-Lessons-From-a-Journey-to-the-BBC--an-Unfair-G-O-A-T-Debate-and-the-One-Thing-You-Must-Do-As-a-Journalist-efejbs/a-a2fh6qi" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">Debola Adebanjo: 5 Key lessons from getting to the BBC. </a></li>
                        <li className={style.award__list}><a href="https://tunein.com/podcasts/Podcasts/Lokal-FM-Podcasts-p1105680/?topicId=140927126" target="_blank" rel="noreferrer">Meet Debola Adebanjo</a></li>
                        <li className={style.award__list}><a href="https://tunein.com/podcasts/Podcasts/Lokal-FM-Podcasts-p1105680/?topicId=140927126" target="_blank" rel="noreferrer">Meet Debola Adebanjo</a></li>
                    </ul>
                    <hr className={style.line} />

                    <h1 className={style.award__title}>Technical</h1>
                    <ul className={style.award__ul}>
                        <li className={style.award__list}><a href="https://open.spotify.com/episode/14lnQxpnXEbUrIsgMf2T3C" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">Debola Adebanjo: On creating your own opportunities and being an international journalist</a></li>
                        <li className={style.award__list}><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iZmZmMmMwL3BvZGNhc3QvcnNz/episode/YjdlNDQ5NzgtOTkwOC00ODE0LWJhYWUtMmMxZjk3MjIyODA3" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">The Hindsight Pod: Nigerian Women's League, CAF &amp; More With Debola.</a></li>
                        <li className={style.award__list}><a href="https://anchor.fm/first-x-minutes/episodes/Ep--97-5-Key-Lessons-From-a-Journey-to-the-BBC--an-Unfair-G-O-A-T-Debate-and-the-One-Thing-You-Must-Do-As-a-Journalist-efejbs/a-a2fh6qi" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">Debola Adebanjo: 5 Key lessons from getting to the BBC. </a></li>
                        <li className={style.award__list}><a href="https://tunein.com/podcasts/Podcasts/Lokal-FM-Podcasts-p1105680/?topicId=140927126" target="_blank" rel="noreferrer">Meet Debola Adebanjo</a></li>
                        <li className={style.award__list}><a href="https://tunein.com/podcasts/Podcasts/Lokal-FM-Podcasts-p1105680/?topicId=140927126" target="_blank" rel="noreferrer">Meet Debola Adebanjo</a></li>
                    </ul>
                    <hr className={style.line} />


                    <h1 className={style.award__title}>Personal</h1>
                    <ul className={style.award__ul}>
                        <li className={style.award__list}><a href="https://open.spotify.com/episode/14lnQxpnXEbUrIsgMf2T3C" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">Debola Adebanjo: On creating your own opportunities and being an international journalist</a></li>
                        <li className={style.award__list}><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9iZmZmMmMwL3BvZGNhc3QvcnNz/episode/YjdlNDQ5NzgtOTkwOC00ODE0LWJhYWUtMmMxZjk3MjIyODA3" target="_blank" rel="noreferrer" class="press-awards_link__2bki0">The Hindsight Pod: Nigerian Women's League, CAF &amp; More With Debola.</a></li>
                    </ul>
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
export default Skills;