import "./EventCard.css"
import {FaAngleDown,FaAngleUp,FaMapMarkerAlt} from "react-icons/fa"
import { useState } from "react";


function EventCard() {

    return <>
            <div className=  "Ecard">
                
                <div className="date">
                    Date
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut odio, expedita ea laudantium accusantium, necessitatibus .
                </div>
                <div className="location">
                    
                        <div className="LocIcon">
                            <FaMapMarkerAlt/>
                        </div>
                        <div className="loc">
                            La habana
                        </div>
                </div>

            </div>
    
    
    </>
}

export default EventCard ;