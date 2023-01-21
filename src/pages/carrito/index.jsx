import React, { useContext } from "react";
import './style.css';
import NavBar from "../../components/NavBar";
import { CartContext } from "../../context";
import Footer from "../../components/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrito = ({children}) => {

    const { cart, num, total, eliminarProducto, finalizarCompra, increaseQty, decreaseQty } = useContext(CartContext);

    let totalPagar = 0;

    let precioTotalItem = [];

    for (let i = 1; i < 7; i++) {
        precioTotalItem[i] = 0;
    }

    return(
        <div>
            <NavBar />
            <div className="cart-main">
                <div className="cart-container">
                    <h3 className="cart-title">Carrito({total})</h3>
                    <div className="line"></div>
                    <div className="cart-items-container-father">
                        {cart.map((cart) => {
                            let totalll = 0;
                            totalll = (cart.price * num[cart.id]);
                            precioTotalItem[cart.id] = totalll;
                            let final = 0
                            for (let i = 1; i < 7; i++) {
                                final = final + precioTotalItem[i];
                            }
                            totalPagar = final;
                            return(
                                <div key={cart.id}>
                                    <div className="cart-items-container">
                                        <img className="cart-image" src={cart.image} alt={cart.name} />
                                        <h3 className="cart-titlee">{cart.name}</h3>
                                        <div className="cart-stock-container">
                                            <div className="detail-qty-container">
                                                <button disabled={num[cart.id] == 1} onClick={() => decreaseQty(cart.id)} className="detail-button-minus">
                                                    -
                                                </button>
                                                <input className="detail-input" placeholder={num[cart.id]} />
                                                <button disabled={num[cart.id] == cart.stock} onClick={() => increaseQty(cart.id)} className="detail-button-plus">
                                                    +
                                                </button>
                                            </div>
                                            <h6 className="cart-stock-text">{cart.stock} disponibles</h6>
                                        </div>
                                        <div onClick={() => eliminarProducto(cart.id)}  className="cart-delete-container">
                                            <h6 className="cart-delete-text">ELIMINAR</h6>
                                        </div>
                                        <h5 className="cart-price">$ {cart.price}</h5>
                                    </div>
                                    <div className="line"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-end-buy-container">
                        <div onClick={() => finalizarCompra(totalPagar)} className="cart-buyy-button">
                            <h6 className="cart-buy-text">FINALIZAR COMPRA</h6>
                        </div>
                        <h6 className="cart-total-text">Total: $ {totalPagar}</h6>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Carrito;