import React from "react";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {

    return( 

        <div className="contact"> 
            <div className="intro-contacts">
                <h1> Contact me!</h1>
            </div>

            <div className="list">
                <div className="component"> 
                    <div className="phone"> </div>
                     <div className="text"> <h2> phone </h2> </div>
                </div>

                <div className="component"> 
                    <div className="email"> </div>
                     <div className="text"> <h2> email </h2> </div>
                </div>

                <div className="component"> 
                    <div className="linked"> </div>
                     <div className="text"> <h2> LinkedIn </h2> </div>
                </div>

               

            </div>
        </div>
    )
}; 

export default Contact;
