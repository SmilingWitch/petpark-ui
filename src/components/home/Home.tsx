import myGif from "./Corgi_Dog_GIFs.gif"
import "./Home.css"

function Home() {

    return (
        <div className="PP">
            <div className="homeBx">
                <div className="banner">
                    <div className="container">
                        <div id="scene">
                            <h2 id="text">
                                <span>P</span>
                                <span>E</span>
                                <span>T</span>
                                <span>S</span>
                            </h2>
                        </div>
                        <div className="adopt">
                            <h3>Giving pets the lives they deserve</h3>
                            <div className="adoptButton">Adopt Now</div>
                        </div>
                    </div>                    
                </div>
                
                <div className="petBx">
                    <div className="imgPet1"></div>
                    <div className="imgPet2"></div>
                </div>
            </div>

        </div>
    );
}

export default Home ;