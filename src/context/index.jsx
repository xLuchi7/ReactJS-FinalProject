import { createContext, useState } from "react";
import { PRODUCTS } from "../constants/products";

const initialState = {
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    total: 0
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const total = () => {
        return total;
    }

    const addToCart = (item, newQty) => {
        // const newCart = cart.filter(prod => prod.id !== item.id);
        // newCart.push({ ...item, quantity: newQty });
        // setCart(newCart);

        onclick = () => {
            console.log("pepe")
        }
        // const item = PRODUCTS.find((product) => product.id == id);
        // setCart(currentCart => {
        //     return currentCart.map((product) => {
        //         if (product.id == id) {
        //             total = total + 1;
        //             return{
        //                 ...product,
        //                 total
        //             }
        //         } else {
        //             return product;
        //         }
        //     })
        // })
    }
    

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, total}} >
            {children}
        </CartContext.Provider>
    )
}