import React from "react";
import logo from "./images/img.jpg"
import './intro.css'

function Intro() {
    return (
        <div className="worky">
            <div className="intro">
                <h1 class="section__title section__title--intro">
                My Name is <strong>Summira Hussain</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">Junior Software developer</p>
                <img src={logo} alt="summira hussain looking at the camera" class="intro__img" />
            
            </div>
        </div>
    )
}

export default Intro;
