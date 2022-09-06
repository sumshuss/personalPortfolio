import React from "react";
import logo from "./images/sumhuss.jpg"
import './aboutMe.css'

function AboutMe() {
    return (
        <div className="about-sum">
                <div className="about-me">
                    <h2 class="section__title section__title--about">Who I am</h2>
                <p class="section__subtitle section__subtitle--about">Looking for my first Software developer positon</p>
                
                <div class="about-me__body">
                        <p>From being a teacher to working in a lab, I finally found my passion for coding after stumbling across my colleague, who was coding in python. He showed me how to analyse data with python. After that, I decided to do more research into programming and started my coding journey with Scrimba's front end developer course. </p>
                </div>
            
                <img src={logo} alt="summira standing" class="about-me__img" />
            
            </div>

            <div className="text-bottom">
                <p className="bottom-text"> 
                    From there, my passion grew and I was determined to start a career in technology. I was very willing to learn and started up with the basics. HTML, CSS and Javascript. When I started at futureproof, I expanded my knowledge and skill and learned backend languages (python), databases (SQL, NoSQL, PostgresSQL) and software testing. I also learned how to work in a project team and build numerous projects with my fellow colleagues. This enabled me to work on my communication skills. 
                </p>
                <p className="bottom-text">
                     I am now so very excited to learn even more skills and also start my career in tech. With my constant passion for learning and my determination, I know I will be an asset to the tech industry!
                </p>
            </div>
    </div>
        
    )
}

export default AboutMe;
