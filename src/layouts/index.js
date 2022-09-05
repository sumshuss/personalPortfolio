import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from 'react-router-dom'


function Layout() {

    return (
        <>
            <Header />
            <Outlet />
         
            {/* <div class="area" >

             <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> 
        
    </div > */}
       

           
            
                
             <Footer />
        </>

    )
}

export default Layout;
