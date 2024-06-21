import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login() {

    return (
        <>
            <div className="main">
                <div className="wrapper">
                    <form action="">
                        <h1>Connexion</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Mot de passe oublié ?</a>
                        </div>

                        <button type="submit">Se connecter</button>

                        <div className="register-link">
                            <p>Pas encore de compte ? <Link to="/register">Inscription</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Login