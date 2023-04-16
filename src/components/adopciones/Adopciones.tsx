import {AiFillPlusCircle} from "react-icons/ai";
import AdoptCard from "../adoptCard/AdoptCard";
import Slide from "../slide/Slide";
import "./Adopciones.css"


function Adopciones() {
    return <>
        <div className = "content">
                <div className = "AP"> 
                    <div className="Bx">
                        <h2>En Adopción!</h2>
                         <div className = "p">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis quod dolore expedita nihil consequuntur doloremque</p>    
                        </div>
                    </div>
                      
                </div>
                <div className=" carrusel">
                    <div className="blur1"></div>
                    <div className = "gridContainer"> 
                        <Slide duration = {3000} delay = {1} />
                    </div>
                    <div className="blur2"></div>
                     <div className = "more">
                        <div className = "icon"> 
                            <a href=""> 
                                <AiFillPlusCircle/>
                            </a> 
                        </div> 
                    </div>
                </div>
                
 
            </div>

        </>
    
}

export default Adopciones ;