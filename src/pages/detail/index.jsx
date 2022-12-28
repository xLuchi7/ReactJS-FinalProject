import React, { useState, useContext } from "react";
import './style.css';
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { CartContext, CartProvider } from '../../context';
import Stars from "../../components/stars";

const Detail = () => {
    const { id } = useParams() || {};
    const { state } = useLocation() || {};

    // console.log('state: ', state);
    // console.log("id: ", state.id);
    // console.log("id probar (sale mal): ", id);
    //console.log("stars: ", state.stars);

    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    console.log("cart: ", cart)

    const cant = state.stars;

    console.log("stars con num: ", cant);

    return(
        <div>
            <NavBar />
            <div className="detail-back">
                <div className="detail-container">
                    <div className="detail-photo">
                        {/* <img src={state.image} alt={state.name} /> */}
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={state.image1} className="d-block w-100" alt={state.name}/>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={state.image2} className="d-block w-100" alt={state.name}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={state.image3} className="d-block w-100" alt={state.name}/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="detail-description">
                        <h3 className="detail-title">{state.extension}</h3>
                        <Stars cantRender={state.stars} />
                        <div className="detail-alert">
                            <h6 className="detail-alert-text">MAS VENDIDO</h6>
                        </div>
                        <h5 className="detail-price">$ {state.price}</h5>
                        <ul className="detail-details">
                            <li><p>{state.description1}</p></li>
                            <li><p>{state.description2}</p></li>
                            <li><p>{state.description3}</p></li>
                        </ul>
                        {/* <div className="detail-qty-container">
                            <button className="detail-button-minus">
                                -
                            </button>
                            <input className="detail-input" type="text" value={1} />
                            <button className="detail-button-plus">
                                +
                            </button>
                        </div> */}
                        <div onClick={addToCart(state.id)} className="add-to-cart-button">
                            <h6 className="add-to-cart-text">Agregar al Carrito</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;