import "./Noticias.css"
import NoticeCard from "../noticeCard/NoticeCard"
import {FiArrowUpRight} from "react-icons/fi"
import RedButton from "../redButton/RedButton"

function Noticias() {
    return <>
        <div className = "NewsBx">
            <div className="Bx1">
                <div className="headerBx">
                    <div className="header2">
                        <h2>Noticias!!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro, nobis debitis nesciunt totam quia amet explicabo. Incidunt, consequuntur? Iure, voluptatem! Placeat quae sapiente quas adipisci, animi minus culpa modi!</p>
                    </div>
                    <div className="buttonNotice">
                        <div className="allNotices"> <RedButton textButton="Todas las noticias"/></div>
                        <div className="addNotices"> 
                            <a href="#" >
                                Agregar una noticia 
                            </a> 
                            <a href="#"><FiArrowUpRight/></a>
                        </div>
                    </div> 
                </div>                     
            </div>
            
            <div className="NoticeCardConeiner">
            <NoticeCard/>
            <NoticeCard/>
            </div>
            
            
        </div>
    </>
}

export default Noticias ;