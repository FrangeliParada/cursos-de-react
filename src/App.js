import React from 'react';

// import Contador from './componentes/Contador';
// import Jsx from './componentes/Jsx';
// import Lista from './componentes/lista';
// import Formulario from './componentes/Formulario';
// import FormHook from './componentes/FormHook';
// import FormCrud from './componentes/FormCrud';
// import EjemploUno from './componentes/ejemploUno';

// import Saludo from './components/Saludo';
import Comentario from './components/comentario';

function App() {

  const sujeto ={
    nombre: 'Juanito',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
  }
  return (
    <div className='container mt-2'>

      {/* <Contador /> */}
      {/* <Jsx /> */}
      {/* <Lista /> */}
      {/* <Formulario /> */}
      {/* <FormHook /> */}
      {/* <FormCrud /> */}
      {/* <EjemploUno /> */}

      {/* componentes=  */}
    {/* <Saludo persona="Dari"/> */}
    <Comentario sujeto={sujeto}/>

    </div>
  );
}

export default App;