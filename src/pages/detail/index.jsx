import React, { useState, useContext, useEffect } from "react";
import './style.css';
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { CartContext, CartProvider } from '../../context';
import Stars from "../../components/stars";
import HalfStar from "../../components/half-star";
import Footer from "../../components/footer";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, limit } from 'firebase/firestore';
import Loader from "../../components/loader";

const Detail = () => {
    const { id } = useParams() || {};
    const { state } = useLocation() || {};

    const { addToCart } = useContext(CartContext);
    const { cart } = useContext(CartContext);

    const [product, setProduct] = useState([]);

    const [loadingDetail, setLoadingDetail] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const q = query(
            collection(db, 'products'),
            where('id', '==', id),
        );
        getDocs(q)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    setProduct(doc.data())
                })
            })
            .catch((error) => {
                console.log(error);
            });

        setTimeout(() => {
            setLoadingDetail(false);
        }, 1000);
    }, [id]);

    return(
        <div>
            <NavBar />
            {loadingDetail ? (
                <div className='loading-container'>
                    <Loader />
                </div>
                ) : (
                   <>
                    <div className="detail-back">
                        <div className="detail-container">
                            <div className="detail-photo">
                                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="10000">
                                            <img src={product.image1} className="d-block w-100" alt={product.name}/>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="2000">
                                            <img src={product.image2} className="d-block w-100" alt={product.name}/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={product.image3} className="d-block w-100" alt={product.name}/>
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
                                <h3 className="detail-title">{product.extension}</h3>
                                <div className="detail-rating-content">
                                    <Stars cantRender={product.stars} />
                                    <HalfStar yesOrNo={product.halfExtraStar} />
                                    <h6 className="detail-rating-number">({product.opinions})</h6>
                                </div>
                                <div className="detail-alert">
                                    <h6 className="detail-alert-text">MAS VENDIDO</h6>
                                </div>
                                <h5 className="detail-price">$ {product.price}</h5>
                                <ul className="detail-details">
                                    <li><p>{product.description1}</p></li>
                                    <li><p>{product.description2}</p></li>
                                    <li><p>{product.description3}</p></li>
                                    <li><p>{product.stock} unidades en Stock</p></li>
                                </ul>
                                <div onClick={() => addToCart(product)} className="add-to-cart-button">
                                    <h6 className="add-to-cart-text">Agregar al Carrito</h6>
                                </div>
                            </div>
                        </div>
                    </div>   
                   </> 
            )}
            <Footer />
        </div>
    )
}

export default Detail;