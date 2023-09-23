import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"



let header = document.querySelector('header');

function NavBar() {
    return (
        <header>
            <div className="logo">
                <h3>LOGO</h3>
            </div>
                <ul>
                <li> <a href="#home">Home</a> </li>
                        <li> <a href="#adopciones" >Adopciones</a> </li>
                        <li> <a href="#eventos" >Eventos</a> </li>
                        <li> <a href="#productos" >Tienda</a> </li>
                        <li> <a href="#noticias" >Noticias</a> </li>
                        <li ><a href="#"  className="sing">Sing In</a> </li>
                        <li ><a href="#"  className="log">Log In</a> </li>
                        <li>
                        
                    </li>
                </ul>
                
                <div className = "toggle" > </div>
                
        </header>     
          
    );
    
    
}




export default NavBar ;