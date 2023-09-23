import myGif from "./Corgi_Dog_GIFs.gif"
import "./Home.css"
import Particles from 'particles.js';
import particles from './particles.json';
import  { useEffect, useRef, useState } from 'react';
import RedButton from "../redButton/RedButton";

import Animation from 'simple-react-animations';




function Home() {

    /*const particlesRef = useRef(null);

  useEffect(() => {
    Particles.init(particlesRef.current, particles);
  }, []);*/

  /*----Mause mover animation-----*/

  const [mousePositionP, setMousePositionP] = useState({ x: 0, y: 0 });
  
  
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePositionP({ x: event.clientX, y: event.clientY });
      
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);}
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePositionP.x * 0}px, ${mousePositionP.y * 0.1}px, 0)`,
  };
  const parallaxStyle1 = {
    transform: `translate3d(${mousePositionP.x * 0}px, ${mousePositionP.y * -0.1}px, 0)`,
  };
  


    return (

        


        <div className="PP">
            {/*<div className= "particles">
                <div ref={particlesRef}  >
                </div>
            </div>*/}


            <div className="homeBx">
                <div className="banner">
                    <div className="container">
                        <div id="scene">
                            <h2 id="text" >
                                <span style={parallaxStyle}>P</span>
                                <span style={parallaxStyle1}>E</span>
                                <span style={parallaxStyle}>T</span>
                                <span style={parallaxStyle1}>S</span>
                            </h2>
                        </div>
                        <div className="adopt">
                            <h3>Giving pets the lives they deserve</h3>
                            <RedButton textButton="Adopt Now"/>
                        </div>
                    </div>                    
                </div>
                
                <div className="petBx">
                    <div className="imgPet1" ></div>
                    <div className="imgPet2" ></div>
                </div>
    </div>

        </div>
    );
}

export default Home ;