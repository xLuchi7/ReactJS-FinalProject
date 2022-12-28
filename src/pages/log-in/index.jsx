import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const LogIn = () => {
    return(
        <div className="background">
            <div>
                <Link to='/' ><h1 className="titulo-iniciar animate__animated animate__zoomInUp">VENTA GAMER</h1></Link>
            </div>
            <div className="div-log-in">
                <h2 className="iniciar-texto animate__animated animate__rotateInDownRight">Inicio de Sesion en la cuenta de Venta Gamer</h2>
                <div className="inicio-card">
                    <p className="correo animate__animated animate__rotateInDownRight UnPunDos">Correo electronico</p>
                    <input className="barra-correo animate__animated animate__rotateInDownRight UnPunCua" type="email" name="email" placeholder="ejemplo@gmail.com"/>
                    <p className="contra animate__animated animate__rotateInDownRight UnPunSeis">Contraseña</p>
                    <input className="barra-correo animate__animated animate__rotateInDownRight UnPunOch" type="password" name="Contraseña" placeholder=""/>
                    <div className="enter animate__animated animate__rotateInDownRight DosSeg">
                        <a><p className="log-in-button-text">Iniciar Sesion</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;