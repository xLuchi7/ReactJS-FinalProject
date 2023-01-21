import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import check from './img/check.png';
import cross from './img/cross.png';
import Swal from 'sweetalert2';

const Register = () => {

    let registro = sessionStorage.getItem("status");
    registro = "no-registrado";
    sessionStorage.setItem("status", registro);

    const validateRegister = (e) => {
        e.preventDefault();
        e.preventDefault();
        let mailAdress = document.getElementById("mail-adress");
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
        let mailAproved = false;
        let passwordAproved = false;
        let confirmPasswordAproved = false;
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
        if (password.value.length < 5) {
            document.getElementById("checkkk").style.display="none";
            document.getElementById("crossss").style.display="block";
            document.getElementById("confirmar-valid").style.display="none";
            document.getElementById("contra-no-validd").style.display="block";
            confirmPasswordAproved = false;
        }else{
            if (confirmPassword.value != password.value) {
                document.getElementById("checkkk").style.display="none";
                document.getElementById("crossss").style.display="block";
                document.getElementById("confirmar-valid").style.display="none";
                document.getElementById("confirmar-no-valid").style.display="block";
                document.getElementById("contra-no-validd").style.display="none";
            }else{
                document.getElementById("checkkk").style.display="block";
                document.getElementById("crossss").style.display="none";
                document.getElementById("confirmar-valid").style.display="block";
                document.getElementById("confirmar-no-valid").style.display="none";
                document.getElementById("contra-no-validd").style.display="none";
                confirmPasswordAproved = true;
            }
        }
        if (mailAproved == true && passwordAproved == true && confirmPasswordAproved == true) {
            Swal.fire({
                title: 'Registrado exitosamente',
                icon: 'success',
                focusConfirm: false,
                confirmButtonText:
                'Confirmar',
            })
            registro = "registrado";
        }else{
            registro = "no-registrado";
        }
        sessionStorage.setItem("status", registro);
    }

    return(
        <div className="background">
            <div className="log-in-header-container">
                <Link className="titulo-iniciar" to='/'>VENTA GAMER</Link>
            </div>
            <div className="div-log-in">
                <h2 className="register-texto">Registrarse en Venta Gamer</h2>
                <form onSubmit={validateRegister} action="">
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
                        <p className="contra c">Confirmar Contraseña</p>
                        <div className="derecho">
                            <input id="confirm-password" className="barra-correo" type="password" name="Contraseña" placeholder=""/>
                            <img className="check" id="checkkk" src={check} alt="checkmark"/>
                            <img className="cross" id="crossss" src={cross} alt="crossmark"/>
                        </div>
                        <p className="aproved" id="confirmar-valid">Las contraseñas coinciden</p>
                        <p className="rejected" id="confirmar-no-valid">Las contraseñas no coinciden</p>
                        <p className="rejected" id="contra-no-validd">Caracteres insuficientes (5 min)</p>
                        <button className="enter" type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;