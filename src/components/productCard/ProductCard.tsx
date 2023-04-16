import "./ProductCard.css"
import {HiOutlineShoppingCart} from "react-icons/hi"

/*--------Types-------------*/

type ProductCard = {
    url: string   
    
}

/*------------------------------*/
function ProductCard(props:ProductCard) {

    return <>
        <div className = "pet1">
                    <div className = "img1">
                        <img src={props.url} alt=""  />
                    </div>
                    <div className = "detail">
                        <div className = "m">
                            <div className = "nombre"> <h2> Nombre</h2>  </div> 
                            <div className = "precio"> $ </div> 
                            <div className = "icons"> <a href=""><HiOutlineShoppingCart></HiOutlineShoppingCart></a> </div>
                        </div> 
                    </div>   
                </div> 
    </>
}

export default ProductCard ;