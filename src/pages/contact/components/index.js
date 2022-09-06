import React from "react";
import './index.css'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";


function Contact() {

    return( 

        <div className="contact"> 
            <div className="intro-contacts">
                <h1> Contact me!</h1>
            </div>

            <div className="list">
                <div className="component"> 
                    <div className="phone icons"> < FaPhoneSquareAlt />  </div>
                     <div className="text"> <h2> phone </h2> </div>
                     <div className="contacts num"> 07388873243</div>
                </div>

                <div className="component"> 
                    <div className="email icons"> <MdMail /> </div>
                     <div className="text gemail"> <h2> Email </h2> </div>
                     <div className="contacts mail"> summira508411@gmail.com </div>
                </div>
            </div>
            <div className="lastmess">
                <h3 className="bye"> I will be looking forward to hearing from you!</h3>
            </div>
        </div>
    )
}; 

export default Contact;
