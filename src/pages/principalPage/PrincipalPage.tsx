import Adopciones from "../adopciones/Adopciones";
import Home from "../home/Home";
import "./PrincipalPage.css";
import Eventos from "../eventos/Eventos";
import Shop from "../shop/Shop";
import Products from "../products/Products";







let header = document.querySelector('header');

function PrincipalPage() {

    return  <>
        <div className="Cont" >
            
            <header  id = "header active">
                <div className="logo">
                    <h3>LOGO</h3>
                </div>
                    <ul>
                        <li> <a href="#home" onClick = {toggle}>Home</a> </li>
                        <li> <a href="#adopciones" onClick = {toggle}>Adopciones</a> </li>
                        <li> <a href="#eventos" onClick = {toggle}>Eventos</a> </li>
                        <li> <a href="#productos" onClick = {toggle}>Tienda</a> </li>
                        <li> <a href="#noticias" onClick = {toggle}>Noticias</a> </li>
                        <li ><a href="#" onClick = {toggle} className="sing">Sing In</a> </li>
                        <li ><a href="#" onClick = {toggle} className="log">Log In</a> </li>
                    </ul>
                    <div className = "toggle" onClick = {toggle}> </div>
                
            </header>
            
                <section className="a" id="home">
                        <Home/>
                </section>

                <section className="b" id="adopciones">
                    <Adopciones/>
                </section>

                <section className="c" id="eventos">
                    <Eventos/>
                </section>
                <section className="d" id="productos">
                <Shop/>
                </section>
                <section className="f" id="noticias">noticias</section>
                <section className="g" id="informacion">informacion</section>
                <section className="sec contact" id="contactos">contactos</section>
{another()}
            </div>
            </>
                
    
        
    
    
}

function another() {
    window.addEventListener("scroll" , function() {    /*escuchador que indica al navegador que este atento a la interaccion el usuario */
    header.classList.toggle("sticky", window.scrollY > 0) ; /*objeto especial con metodos para agregar, eliminar y alternar una sola clase*/ 
                                                            /* Se agrega la clase sticky cuando se haga scroll */
}
)
}

function toggle() {
    header.classList.toggle("active") ;
}

export default PrincipalPage ;