import React, { useEffect } from "react";
import './style.css';
import NavBar from '../../components/NavBar/index';
//import { PRODUCTS } from '../../constants/products';
import { useNavigate } from 'react-router-dom';
import Card from "../../components/card";
import Footer from "../../components/footer";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { useState } from "react";
import Loader from "../../components/loader";

let background = localStorage.getItem("fondo");
localStorage.setItem("fondo", background);

const Home = () => {
    
    const navigate = useNavigate();
    
    const onHandlerSelect = (product) => {
        navigate(`/product/${product.id}`)
    }

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    let cant = products.length;
    localStorage.setItem("cant", cant);

    useEffect(() => {
        const db = getFirestore();
        const products = collection(db, 'products');
        getDocs(products)
            .then((snapshot) => {
                const result = snapshot.docs.map((doc) => (doc.data()));
                setProducts(result);
            })
            .catch((error) => {
                console.log(error);
            });

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return(
        <div>
            <NavBar />
            {loading ? (
                <div className='loading-container'>
                    <Loader />
                </div>
                ) : (
                    <>
                        <div id="cambiar" className="flexx">
                            <section className="grid-section">
                                {products.map((product) => (
                                    <Card product={product} key={product.id} onSelect={onHandlerSelect} />
                                ))}
                            </section>
                        </div>
                    </> 
            )}
            <Footer />
        </div>
        
    ); 
}

export default Home;