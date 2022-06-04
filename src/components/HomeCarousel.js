import React, { useState, useEffect } from 'react';
import style from './HomeCarousel.module.css';
import { sliderData } from "../components/SliderData";
const HomeCarousel = () => {
    const [current, setCurrent] = useState(0)
    const slideLength = sliderData.length;

    setTimeout(() => {
        setCurrent(current === slideLength - 1 ? 0 : current + 1)
    }, 2000);

    useEffect(() => {
        setCurrent(0);
    }, [])

    return <div className={style.container}>
        {sliderData.map((slide, index) => {
            return <div className={index === current ? `${style.slide} ${style.current}` : `${style.curent}`} key={index}>
                {index === current && (
                    <>
                        <img src={slide.image} className={style.slidingimg} alt="slide n" />
                    </>
                )}
            </div>
        })}

    </div>;
}

export default HomeCarousel;