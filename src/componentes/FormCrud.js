import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const FormCrud = () => {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data , e) => {
        console.log(data)
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Escribe una nota</h1>
            <form onSubmit= {handleSubmit(onSubmit) } >
                <input
                name='Titulo'
                placeholder='Ingrese titulo'
                className='form-control my-2'
                ref={
                    register("Titulo", {
                        required:{value:true, message: 'Campo obligatorio'},
                        minLength: {value: 2, message: 'minimo dos letras'}
                    })
                }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.Titulo?.message}
                </span>
                <input
                name='Descripcion'
                placeholder='Ingrese descripción'
                className='form-control my-2'
                ref={
                    register("Descripcion", {
                        required: {value:true, message: 'Campo obligatorio'}
                    })
                }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.Descripcion?.message}
                </span>
                <button className='btn btn-primary'>Agregar</button>
            </form>
        </Fragment>
     );
}
export default FormCrud;