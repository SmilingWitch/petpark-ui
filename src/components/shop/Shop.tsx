import Products from "../products/Products";
import "./Shop.css"

function Shop() {
    return <>
        <div className="ShopCont">
            <div className="shopHeader">
                <div className="shopH">
                    <h2>Visita nuestra tienda</h2>
                    <div className="buttonStore">Tienda</div>
                </div>
                
            </div>

            <Products/>
        </div>
            
    
    </>
}

export default Shop ;