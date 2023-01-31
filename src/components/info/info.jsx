import React from "react";
import { Link } from "react-router-dom";

const Info = ()=>{
    return(
        <div>
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus error soluta praesentium quaerat ullam perferendis culpa, autem harum officia maiores velit, aperiam vero quod natus. Eligendi enim autem qui.
            </h1>
            <Link to="/">
                <button>
                    volver
                </button>
            </Link>
        </div>
    )
}

export default Info;