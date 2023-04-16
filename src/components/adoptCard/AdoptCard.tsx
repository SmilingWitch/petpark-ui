import img1 from "./img1.jpg";
import "./AdoptCard.css"

function AdoptCard() {
    return <>
            <div className="cardBx">
                <div className = "pet"> 
                    <div className = "img">
                        <img src={img1} alt="" />
                    </div>
                    <div className = "details">
                        <div className = "n1">
                            <h2> Nombre <br /> <span>Historia</span> </h2>
                        </div>
                    </div>
                </div>
            </div>
            
    
    </>
}

export default AdoptCard ;