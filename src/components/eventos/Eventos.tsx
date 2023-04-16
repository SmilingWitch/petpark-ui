import "./Eventos.css"
import {BsArrowBarRight} from "react-icons/bs"
import Particles from "../particles/Particles";
import EventCard from "../eventCard/EventCard";


function Eventos() {
    return <>
        <div className="eventCont">
            <div className="headerEvent">
                <h2>Proximos eventos</h2>
            </div>
            <div className = "EventBx">
                <EventCard/>
            </div>

        </div>
        

    </>
}

export default Eventos ;