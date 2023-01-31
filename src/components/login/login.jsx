import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div>
            <h1>estas en login</h1>
            <Link to="/">
                <button>volver</button>
            </Link>
        </div>
    )
}

export default Login