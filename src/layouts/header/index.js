import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { SidebarData } from './data';
import { AiOutlineClose } from "react-icons/ai";


function Header() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  


    return(


        <>


<div className='navbar'>
            <div>
            <Link to='#' className='menu-bars'>
              <FaBars onClick={showSidebar} />
            </Link>
            </div>
            <div>
            <h1 id="navbrand">Summira's portfolio </h1>
            </div>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars' id="closing">
                  <AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link className="nav-item-link" to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

       
        </>
    )
}

export default Header;
