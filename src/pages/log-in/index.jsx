import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import check from './img/check.png';
import cross from './img/cross.png';
import Swal from 'sweetalert2';

const LogIn = () => {

    let userStatus = sessionStorage.getItem("status");
    userStatus = "no-registrado";
    sessionStorage.setItem("status", userStatus);

    let email = sessionStorage.getItem("email");

    const validateLogIn = (e) => {
        e.preventDefault();
        let mailAdress = document.getElementById("mail-adress");
        let password = document.getElementById("password");
        let mailAproved = false;
        let passwordAproved = false;
        let validateEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!validateEmail.test(mailAdress.value)) {
            document.getElementById("check").style.display="none";
            document.getElementById("valid").style.display="none";
            document.getElementById("cross").style.display="block";
            document.getElementById("no-valid").style.display="block";
            mailAproved = false;
        }else{
            document.getElementById("cross").style.display="none";
            document.getElementById("no-valid").style.display="none";
            document.getElementById("check").style.display="block";
            document.getElementById("valid").style.display="block";
            mailAproved = true;
        }
        if (password.value.length < 5) {
            document.getElementById("checkk").style.display="none";
            document.getElementById("contra-valid").style.display="none";
            document.getElementById("crosss").style.display="block";
            document.getElementById("contra-no-valid").style.display="block";
            passwordAproved = false;
        }else{
            document.getElementById("checkk").style.display="block";
            document.getElementById("contra-valid").style.display="block";
            document.getElementById("crosss").style.display="none";
            document.getElementById("contra-no-valid").style.display="none";
            passwordAproved = true;
        }
        if (mailAproved == true && passwordAproved == true) {
            email = mailAdress.value;
            sessionStorage.setItem("email", email);
            console.log("email: ", email);
            Swal.fire({
                title: 'Inicio de sesion exitoso',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText:
                    `Confirmar`
            })
            userStatus = "registrado";
        }else{
            userStatus = "no-registrado";
        }
        sessionStorage.setItem("status", userStatus);
    }

    return(
        <div className="background">
            <div className="log-in-header-container">
                <Link className="titulo-iniciar" to='/'>VENTA GAMER</Link>
            </div>
            <div className="div-log-in">
                <h2 className="iniciar-texto">Inicio de Sesion en la cuenta de Venta Gamer</h2>
                <form onSubmit={validateLogIn} action="">
                    <div className="inicio-card">
                        <p className="correo">Correo electronico</p>
                        <div className="derecho">
                            <input id="mail-adress" className="barra-correo" type="text" name="email" placeholder="ejemplo@gmail.com" />
                            <img className="check" id="check" src={check} alt="checkmark" />
                            <img className="cross" id="cross" src={cross} alt="crossmark" />
                        </div>
                        <p className="aproved" id="valid">Direccion de correo electronico valida</p>
                        <p className="rejected" id="no-valid">Ingresa un correo electronico valido</p>
                        <p className="contra">Contraseña</p>
                        <div className="derecho">
                            <input id="password" className="barra-correo" type="password" name="Contraseña" placeholder="" />
                            <img className="check" id="checkk" src={check} alt="checkmark" />
                            <img className="cross" id="crosss" src={cross} alt="crossmark" />
                        </div>
                        <p className="aproved" id="contra-valid">Contraseña valida</p>
                        <p className="rejected" id="contra-no-valid">Caracteres insuficientes (5 min)</p>
                        <button className="enter" type="submit">Iniciar Sesion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn;