import React, { useState } from "react";
import twitter from "../../img/twitter.svg";
import facebook from "../../img/facebook.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
import medium from '../../img/medium.svg';
import menu from '../../img/menu.svg';

import SideBar from "../sideBar";
import Popup from "../Popup";
const Upcomming = () => {
    const [onPopup, setOnPopup] = useState(false);
    const workData = [{
        workImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        workTitle: 'Senior legal adviser',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    {
        workImage: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        workTitle: 'Architect & Engineer',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    {
        workImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        workTitle: 'Senior legal adviser',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    {
        workImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        workTitle: 'Senior legal adviser',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    {
        workImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        workTitle: 'Senior legal adviser',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    {
        workImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        workTitle: 'Senior legal adviser',
        someDetails: 'Does your lorem ipsum text long for something a little meatier'
    },
    ];

    return (
        <section className="work_section">
            <div className="none"> <Popup triger={onPopup} setTrigger={setOnPopup} /> </div>
            <div className="sidebar"><SideBar /></div>
            <div className="mobile-nav">
                <h1>Debola <span>Adebanjo</span></h1>
                <img src={menu} onClick={() => setOnPopup(true)} alt="menu" />
            </div>

            <div className="home__base">
                <div className="home__header"><h1>Upcomming</h1></div>
                <div className="work__grid">


                    {workData.map((item, index) =>
                    (<div className="work__card" key={index} >
                        <div class="card">
                            <img src={item.workImage} alt="Avatar" />
                            <div class="container">
                                <h4><b>{item.workTitle}</b></h4>
                                <p>{item.someDetails}</p>
                            </div>
                        </div>
                    </div>)
                    )}

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
export default Upcomming;