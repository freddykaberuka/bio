import React from "react";
import SideBar from "./sideBar";
const Home = () => {

    return (
        <section>
            <div><SideBar /></div>
            <div>
                <div className="home__header"><h1>Journalism. Storytelling. Brand Communication.</h1></div>
                <div className="home__image"><img src="https://debola.s3.eu-west-2.amazonaws.com/Image004_8c2e2dcda8.jpg" alt="debola" /></div>
                <div className="home__social"><h1>Home section</h1></div>
            </div>
        </section>
    )

}
export default Home;