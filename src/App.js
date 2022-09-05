import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import { Home, Project, Contacts } from "./pages";

const App = () => {
  return (

    <>
    <div className="overall">
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route  path="/" element={<Home />} /> 
              <Route  path="project" element={<Project />} />
              <Route  path="contacts" element={<Contacts />} />  
          </Route>
      </Routes>
      
      </div>

      </>
  )
}

export default App;
