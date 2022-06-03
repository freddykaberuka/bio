import React, { useState } from "react";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import medium from '../img/medium.svg';
import menu from '../img/menu.svg';
import style from './Gallery.module.css';


import SideBar from "../components/sideBar";
import Popup from "../components/Popup";
const Gallery = () => {
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
                <div className="home__header"><h1>Gallery</h1></div>
                <div className={style.container}>

                    <div className={style.wrap}>
                        <div className={style.gallery}>
                            <figure className={`${style.gallery__item} ${style['gallery__item--1']}`}>
                                <a href="#img1">
                                    <img src="https://images.unsplash.com/photo-1574270981993-f1df213562b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="01" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img1">
                                    <img src="https://images.unsplash.com/photo-1574270981993-f1df213562b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#_" className={style['btn-close']}>&times;</a>
                                </div>
                            </figure>

                            <figure className={`${style.gallery__item} ${style['gallery__item--2']}`}>
                                <a href="#img2">
                                    <img src="https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="02" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img2">
                                    <img src="https://images.unsplash.com/photo-1573743338941-39db12ef9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#_" className={style['btn-close']}>&times;</a>
                                </div>
                            </figure>

                            <figure className={`${style.gallery__item} ${style['gallery__item--3']}`}>
                                <a href="#img3">
                                    <img src="https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="03" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img3">
                                    <img src="https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#_" className={style['btn-close']}>&times;</a>
                                </div>
                            </figure>

                            <figure className={`${style.gallery__item} ${style['gallery__item--4']}`}>
                                <a href="#img4">
                                    <img src="https://images.unsplash.com/photo-1571680719972-f18bb57077cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="04" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img4">
                                    <img src="https://images.unsplash.com/photo-1571680719972-f18bb57077cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#_" className={style['btn-close']}>&times;</a>
                                </div>
                            </figure>

                            <figure className={`${style.gallery__item} ${style['gallery__item--5']}`}>
                                <a href="#img5">
                                    <img src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="05" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img5">
                                    <img src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#_" className={style['btn-close']}>&times;  </a>
                                </div>
                            </figure>

                            <figure className={`${style.gallery__item} ${style['gallery__item--6']}`}>
                                <a href="#img6">
                                    <img src="https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="06" className={style.gallery__img} />
                                </a>
                                <div className={style.lightbox} id="img6">
                                    <img src="https://images.unsplash.com/photo-1568473648251-3a0c3aa56192?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="item" />
                                    <a href="#hhh" className={style['btn-close']}>&times;</a>
                                </div>
                            </figure>
                        </div>
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
export default Gallery;