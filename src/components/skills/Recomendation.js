import React, { useState } from "react";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
import medium from '../../img/medium.svg';
import menu from '../../img/menu.svg';
import style from './Recomendation.module.css';

import SideBar from "../sideBar";
import Popup from "../Popup";
const Recomendation = (props) => {
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
                <div className="home__header"><h1>Recommendations</h1></div>
                <div className={style.container}>
                    <ul className={style.recommendations_list}>
                        <li className={style.recommendations_item} ><div className={style.recommendations_text}>
                            <p>I could go on about how Debola is a consulate professional with a keen eye for details, and a unique angle to every story, but in a world where competence scarcely
                                meets character I feel it is necessary to point out that Debola is an embodiment of both. Her empathy is never understated. Neither in her storytelling nor in her day-to-day
                                relations. She is professional yet kind, thorough yet compassionate. The football ecosystem is a better place because she is in it. Working with her is always exciting and I
                                have no doubt that she will be causing major shifts in the ecosystem in no time at all.
                            </p>
                        </div>
                            <div className={style.recommendations_author}> - Ayoola Kelechi, Associate editorial lead, Gecko Five</div>
                        </li>

                        <li className={style.recommendations_item} ><div className={style.recommendations_text}>
                            <p>I could go on about how Debola is a consulate professional with a keen eye for details, and a unique angle to every story, but in a world where competence scarcely
                                have no doubt that she will be causing major shifts in the ecosystem in no time at all.
                            </p>
                        </div>
                            <div className={style.recommendations_author}> - Ayoola Kelechi, Associate editorial lead, Gecko Five</div>
                        </li>
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
export default Recomendation;