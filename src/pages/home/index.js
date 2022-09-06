import React from "react";
import Education from "./components/education";
import Intro from "./components/intro";
import Middle from "./components/middle";
import AboutMe from "./components/aboutMe";
import { useEffect } from "react";

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Intro />
            <Education />
            <AboutMe />
            <Middle /> 
        </>
    )
}

export default Home;
