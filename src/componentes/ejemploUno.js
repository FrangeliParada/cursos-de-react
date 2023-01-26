import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name= "title"
                placeholder='Ingrese titulo'
                className='form-control my-2'
               {...register("title", {
                        required:{value:true, message: 'Campo obligatorio'},
                        minLength: {value: 2, message: 'minimo dos letras'}
                    })
                }
                ></input>

                        {/* Errors */}
                {   errors.title &&
                <span className="text-danger text-small d-block mb-2">
                    {errors.title.message}
                </span>
                }

                <input
                name= "descripcion"
                placeholder='Ingrese una descripcion'
                className='form-control my-2'
                {...register("descripcion", {
                        required: {value:true, message: 'Campo obligatorio'}
                    })
                }
                ></input>

                        {/* Errors */}
                {   errors.descripcion &&
                <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                </span>
                }

                    {/* Botón */}
                <button className='btn btn-primary'>Agregar</button>
            </form>

                    {/* Lista de elementos agregados */}
            <ul>
                {
                    Entradas.map(item =>
                        <li>
                            {item.title} - {item.descripcion}
                        </li>
                        )
                }
            </ul>
        </Fragment>
    );
}

export default EjemploUno;