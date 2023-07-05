import './App.css'
import React from 'react'
import Dog from './Dog'
import DogsList from './DogsList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
    <div className="App">

   
      {/* SUGERENCIA: use ErrorBoundary como elemento principal de los demás componentes */}
      <ErrorBoundary>
      
        {/* Lo que debería mostrar en caso de que se acceda a la API */}
        {/* <Dog breed={"ruffles"} /> */} {/* Lo que debería mostrar en caso de que haya algún error */}
       
       <DogsList/>
       <Dog/>
    
        </ErrorBoundary>
        <ToastContainer/>
  
      {/* SUGERENCIA: vea la lista completa de razas de la API: https://dog.ceo/dog-api/breeds-list */}
    </div>
  )
}

export default App;