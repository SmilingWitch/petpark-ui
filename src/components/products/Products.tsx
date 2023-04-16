
import  img3 from "./arnes1.jpg";
import  img4 from "./arnes2.jpg";
import  img5 from "./cama1.jpg";
import  img6 from "./cama2.jpg";
import  img7 from "./cama3.jpg";
import  img8 from "./collar1.jpg";
import  img9 from "./collar2.jpg";
import  img10 from "./peine.jpg";
import "./Products.css"

let imgs = [
    "/alfombra.jpg", 
    "/arnes1.jpg", 
    "/cama1.jpg"
    
]
 


function Products() {
    return <div className = "container1">
        <div className = "contBx">
            <div className="cont1" style = {{["--z_i"as any]:-1}}>
                <div className = "imgP" style = {{["--a"as any]:1}} >
                    <div className="infoCard">
                        <h1>50+</h1>
                        <h2>Accesorios</h2>
                    </div>
                </div>
            </div>
            <div className="cont1" style = {{["--z_i"as any]:0}}>
                <div className = "imgP" style = {{["--a"as any]:2}}>
                    <div className="infoCard">
                        <h1>100%</h1>
                        <h2>Confort</h2>
                    </div> 
                </div>
            </div>
            <div className="cont1" style = {{["--z_i"as any]:1}}>
                <div className = "imgP" style = {{["--a"as any]:3}}>
                    <div className="infoCard">
                        <h1>-30%</h1>
                        <h2>Ofertas</h2>
                    </div>
                </div>
            </div>
           {/*{imgs.map(pic => 
                <ProductCard url = {pic}/>
            )} */}  
        </div>

        
    </div>
}








export default Products ;