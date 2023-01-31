import React from "react";
import { Link } from "react-router-dom";
import "./landing.css"

const Pay = () => {
    return (
        <div className="contenedor">
            <h1>estas en Pay</h1>
            <Link to="/">
                <button >entrar</button>
            </Link>
        </div>
    )
}

export default Pay;