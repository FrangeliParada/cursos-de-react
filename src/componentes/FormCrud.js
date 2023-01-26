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
                name='titulo'
                placeholder='Ingrese titulo'
                className='form-control my-2'
                {...register("titulo", {
                        required:{value:true, message: 'Campo obligatorio'},
                        minLength: {value: 2, message: 'minimo dos letras'}
                    })
                }
                ></input>

                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>

                <input
                name='descripcion'
                placeholder='Ingrese descripción'
                className='form-control my-2'
                {...register("descripcion", {
                        required: {value:true, message: 'Campo obligatorio'}
                    })
                }
                ></input>

                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>

                <button className='btn btn-primary'>Agregar</button>
            </form>
        </Fragment>
     );
}
export default FormCrud;