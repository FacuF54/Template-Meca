import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    console.log("ok")
    return(
        <div>
            <Link  to="/">
          <button >volver</button>
        </Link>
        </div>
    )
}

export default Home;