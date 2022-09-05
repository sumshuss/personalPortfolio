import React from "react";
import './education.css'

function Education() {
    return (

        <div className="my-education">
            <h1 className="section__title section__title--education">Where I learned to code</h1>
                <div className="educations">
                    <div className="education">
                        <h2 className="edTitle">Front-end Devloper course at Scrimba</h2>
                        <p>Here is where I officially started my coding journey. At scrimba, I learned mainly front end languages, such as HTML, CSS, Javascript and React.js.<br />
                            I learned how to build simple projects; Scrimba helped me build this website.</p>
                        
                    </div>
                    
                    <div className="education">
                        <h2 className="edTitle">13 week coding bootcamp with Futureproof - Al-Jazari cohort </h2>
                        <p>I decided to go through a coding bootcamp with Futureproof to learn more about coding. Futureproof really helped me develope my front end developer skills. <br />
                        I also learned back end javascript, SQL, No-SQL, MongoDB and also learned how to do testing and use Docker.
                        I have combined all the skills I have learned and have build projects with my colleagues</p>
                    </div> 
                </div> 
        
        </div>
    )
}

export default Education;
