import React from "react";
import './middle.css'
import img1 from './images/react.jpg'
import img2 from './images/js.png'
import img3 from './images/html.png'
import img4 from './images/css.png'
import img5 from './images/python.png'
import img6 from './images/flask.png'
import img7 from './images/mongo.jpg'
import img8 from './images/postgresql.jpg'
import img9 from './images/dj.jpg'
import img10 from './images/jest.png'
import img11 from './images/pytest.png'
import img12 from './images/redux.png'


function Middle() {


    return (
        <div className="my-work">
       <p className="section__subtitle--work"> Programming languages, frameworks and testing suites I have learned</p>
    

            <div className="portfolio">
                <div className="portfolio__item">
                        <img src={img1} title="react" alt="" className="portfolio__img" />
                                <div className="image__title">
                                    React
                                </div>
                           
                </div>
                
            
                <div className="portfolio__item">
                    <img src={img2} alt="" className="portfolio__img" />
                </div>
                
        
                <div  className="portfolio__item">
                    <img src={img3} alt="" className="portfolio__img" />
                </div>
                
        
                <div  className="portfolio__item">
                    <img src={img4} alt="" className="portfolio__img" />
                </div>

                <div className="portfolio__item">
                    <img src={img5} alt="" className="portfolio__img" />
                </div>

                <div className="portfolio__item">
                    <img src={img6} alt="" className="portfolio__img" />
                </div>

                <div className="portfolio__item">
                    <img src={img7} alt="" className="portfolio__img" />
                </div>

                <div className="portfolio__item">
                    <img src={img8} alt="" className="portfolio__img" />
                </div>
  
                <div className="portfolio__item">
                    <img src={img9} alt="" className="portfolio__img" />
                </div>
                
                <div className="portfolio__item">
                    <img src={img10} alt="" className="portfolio__img" />
                </div>

                <div className="portfolio__item">
                    <img src={img11} alt="" className="portfolio__img" />
                </div>
  
                <div className="portfolio__item">
                    <img src={img12} alt="" className="portfolio__img" />
                </div>
                    
            </div>
    
           
    </div>
    )
}

export default Middle;
