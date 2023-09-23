import Products from "../products/Products";
import RedButton from "../redButton/RedButton";
import "./Shop.css"


function Shop() {
    return <>
        <div className="ShopCont">
            <div className="shopHeader">
                <div className="shopH">
                    <h2>Visita nuestra tienda</h2>
                    <RedButton textButton="Tienda"/>
                </div>
                
            </div>

            <Products/>
        </div>
            
    
    </>
}

export default Shop ;