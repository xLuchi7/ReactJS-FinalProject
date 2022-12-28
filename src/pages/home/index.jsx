import React, { useState, useEffect} from "react";
import './style.css';
import NavBar from '../../components/NavBar/index';
import { PRODUCTS } from '../../constants/products';
import { useNavigate } from 'react-router-dom';
import Card from "../../components/card";

const Home = () => {
    const navigate = useNavigate();
    
    const onHandlerSelect = (product) => {
        console.log(product);
        navigate('/product/${product.id}', {state: product})
    }
    const onHandlerCart = () => {
        console.log("LO TOQUE")
    }

    return(
        <div>
            <NavBar onHandlerCart={onHandlerCart}/>
            <div className="flexx">
                <section className="grid-section">
                    {PRODUCTS.map((product) => (
                        <Card product={product} key={product.id} onSelect={onHandlerSelect} />
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Home;