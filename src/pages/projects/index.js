import React from "react";
import ProjectOne from "./components/projectOne";
import { useEffect } from "react";

function Project() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(

        <>
        
        <ProjectOne /> 
        </>
    )
}

export default Project;
