import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const Home = () => {
    return (
        <section id="contenedorHome">
            <nav className="contenedorNav">
                <Link  to="/pay">
                    <button className="btnNav">Pay</button>
                </Link>
                <Link  to="/dowload">
                    <button className="btnNav">dowload</button>
                </Link>
                <Link to="/login">
                    <button className="btnNav">Login</button>
                </Link>
                <Link to="/info">
                    <button className="btnNav">features</button>
                </Link>
            </nav>
        </section>
    )
}

export default Home;