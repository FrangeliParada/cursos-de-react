import React, {Fragment} from 'react';

const Jsx = () => {

    const nombre = 'Dariana';
    const temperatura = 21;

    return (
       <Fragment>
        <h3>Soy componente Jsx {nombre}</h3>
        <h2>Frío o calor?</h2>
        <h4>
            {
                temperatura > 20 ? 'Calor': 'Frío'
            }
        </h4>
       </Fragment>
    );
};
export default Jsx;