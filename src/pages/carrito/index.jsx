import React, { useContext } from "react";
import './style.css';
import NavBar from "../../components/NavBar";
import { CartContext } from "../../context";

const Carrito = ({children}) => {
    const { cart, total } = useContext(CartContext);
    return(
        <div>
            <NavBar />
            <div className="cart-main">
                <div className="cart-container">
                    <h3 className="cart-title">Carrito(1)</h3>
                    <div className="line"></div>
                    <div className="cart-items-container">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;