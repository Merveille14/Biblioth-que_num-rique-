import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Register() {

    return (
        <>
            <div className="main">
                <div className="wrapper">
                    <form action="">
                        <h1>Inscription</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm password" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                        </div>

                        <button type="submit">Créer le compte</button>

                        <div className="register-link">
                            <p>Déjà un compte ?<Link to="/login">Se connecter</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Register