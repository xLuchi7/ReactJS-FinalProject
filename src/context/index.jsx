import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cart: [],
    setCart: () => {},
    addToCart: () => {},
    eliminarProducto: () => {},
    finalizarCompra: () => {},
    increaseQty: () => {},
    decreaseQty: () => {},
    count: 1,
    vaciar: () => {},
}

let num = [];

for (let i = 1; i < 7; i++) {
    num[i] = 1;
}

let bought = [];

let cantProducts = parseInt(localStorage.getItem("cant")) + 1;

for (let i = 1; i < cantProducts; i++) {
    bought[i] = 0;
}

let dolarBluee;

const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
fetch(URLDOLAR)
.then(respuesta => respuesta.json())
.then( cotizaciones =>{
    const dolarBlue = cotizaciones.blue;
    dolarBluee = dolarBlue.value_buy;
})

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    let total = cart.length;

    const eliminarProducto = (id) => {
        setCart(currentCart => {
            return currentCart.filter((cart) => cart.id !== id);
        })
        bought[id] = 0;
    }

    const finalizarCompra = (total) => {
        let correo = sessionStorage.getItem("email");
        let totalDolars = total/dolarBluee;
        totalDolars = Math.round(totalDolars);
        if (cart.length == 0) {
            Swal.fire(
                'Sin cursos en el carrito',
                'Agrega al menos 1 curso al carrito',
                'info'
            )
        }else{
            if (cart.length == 1) {
                Swal.fire({
                    title: 'Comprar '+cart.length+' Item del Carrito',
                    html:
                        'Total a pagar en pesos: $' + total +
                        '<br/>'+
                        'Total a pagar en dolares: $'+ totalDolars +
                        '<br/>'+  
                        '<br/>'+  
                        '<select name="Pesos">'+
                        '<option value="">Pesos</option>'+
                        '<option value="">USD</option>'+
                        '<br/>',
                    showCloseButton: true,
                    confirmButtonText:
                    '<a id="confirmar-compra">Comprar ahora</a>',
                    footer: 'Valor dolar blue: ' + dolarBluee,
                })
            }else{
                Swal.fire({
                    title: 'Comprar '+cart.length+' Items del Carrito',
                    html:
                        'Total a pagar en pesos: $' + total +
                        '<br/>'+
                        'Total a pagar en dolares: $'+ totalDolars +
                        '<br/>'+  
                        '<br/>'+  
                        '<select name="Pesos">'+
                        '<option value="">Pesos</option>'+
                        '<option value="">USD</option>'+
                        '<br/>',
                    showCloseButton: true,
                    confirmButtonText:
                    '<a id="confirmar-compra">Comprar ahora</a>',
                    footer: 'Valor dolar blue: ' + dolarBluee,
                })
            }
            let confirmar = document.getElementById("confirmar-compra");
            confirmar.onclick = () => {
                toast.success("Se envio un correo electronico con los detalles de la compra a: " +correo, {
                    position: "bottom-right",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "colored",
                    style: {
                        background: "rgba(0, 132, 255, 0.993)",
                    },
                })
                setCart([]);
                bought = [];
            }
        }
    }

    const [count, setCount] = useState(1);

    const decreaseQty = (id) => {
        const a = cart.length - 1;
        cart[a].quantity = cart[a].quantity - 1;
        setCount(cart[a].quantity);
        num[id] = num[id] - 1;
    }

    const increaseQty = (id) => {
        const b = cart.length - 1;
        cart[b].quantity = cart[b].quantity + 1;
        setCount(cart[b].quantity);
        num[id] = num[id] + 1;
    }

    const addToCart = (state) => {
        let estado = sessionStorage.getItem("status");
        if (estado == "registrado") {
            if (bought[state.id] != 1) {
                bought[state.id] = 1;
                setCart([...cart, state]);
                cart.push(state);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: ''+state.name+' fue agregado exitosamete al carrito',
                    showCloseButton: true,
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                })
            }else{
                Swal.fire(
                    ''+state.name+' ya esta en el carrito',
                    'No es posible agregar el mismo producto mas de una vez',
                    'info'
                )
            }
        }else{
            Swal.fire(
                'Inicia Sesion antes de comprar',
                'Aprovecha que hay descuentos!',
                'warning'
            )
        }
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart, eliminarProducto, finalizarCompra, increaseQty, decreaseQty, num, total}} >
            {children}
        </CartContext.Provider>
    )
}