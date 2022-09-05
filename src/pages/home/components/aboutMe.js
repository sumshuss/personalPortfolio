import React from "react";
import logo from "./images/sumhuss.jpg"
import './aboutMe.css'

function AboutMe() {
    return (

        <div className="about-me">
            <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Looking for my first Software developer positon</p>
           
           <div class="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           
            <img src={logo} alt="summira standing" class="about-me__img" />
        
        </div>
    )
}

export default AboutMe;
