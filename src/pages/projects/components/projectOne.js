import React from "react";
import './middle.css';
import { Projects } from "../../../components";

function ProjectOne() {

    return (
        <>  
            {/* <div className="introduction">
                <h1>Here are the projects that I have built so far!</h1>
            </div> */}

            <div className="portfolio-item">

            <div className="introduction">
                <h1>Here are the projects that I have built so far!</h1>
                <p> Hover over each of the image to get a descripton of what each project is.</p>
            </div>
                
            <Projects />
            
            </div>
        </>
    )
}

export default ProjectOne;
