import React from "react";
import { Fragment } from "react";
import Avatar from "./Avatar";

const Comentario = ({sujeto}) => {
    return(
        <Fragment>
            <h1>Comentario</h1>
            <hr />
            <div className="media">
                <Avatar urlImagen={sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
    );
}
export default Comentario;