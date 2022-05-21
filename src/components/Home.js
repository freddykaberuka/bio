import React from "react";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import medium from '../img/medium.svg';
import menu from '../img/menu.svg';

import SideBar from "./sideBar";
const Home = () => {

    return (
        <section>
            <div className="sidebar"><SideBar /></div>
            <div className="mobile-nav"> 
            <h1>Debola <span>Adebanjo</span></h1>
            <img src={menu} alt="menu" />
            </div>

            <div className="home__base">
                <div className="home__header"><h1>Journalism. Storytelling. Brand Communication.</h1></div>
                <div className="home__image"><img src="https://debola.s3.eu-west-2.amazonaws.com/Image004_8c2e2dcda8.jpg" alt="debola" /></div>
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
        </section>
    )

}
export default Home;