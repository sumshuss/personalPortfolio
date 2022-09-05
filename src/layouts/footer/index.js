import React from "react";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons'




function Footer() {

 

    return(

        <div className="footer">
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io">
                        <i className="fab fa-codepen"> <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="http://dribbble.com">
                        <i className="fab fa-dribbble"> <FontAwesomeIcon icon={faInstagram}> </FontAwesomeIcon> </i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                        <i className="fab fa-twitter"> <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com">
                        <i className="fab fa-github"> <FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://google.com">
                        <i className="fab fa-github"> <FontAwesomeIcon icon={faGoogle}> </FontAwesomeIcon></i>
                    </a>
                </li>
            </ul> 
         
        </div>
    )
}

export default Footer;
