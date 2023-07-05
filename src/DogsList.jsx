/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"
import { useState } from "react";

import Dog from "./Dog";
function DogsList() {

    /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breeds/list/all`
    );

    /* Según el status de conexión con la API, se muestra la información al usuario */
    if (status === statusList.LOADING) {
        return <p>Cargando...</p>;
    }
    if (status === statusList.SUCCESS) {
  
     const breedsArray = Object.entries(data.message).map(([breed, subBreeds]) => ({
      breed,
      subBreeds
    }));

   
    const handleChange = (event) => {
      <Dog breed ={event.target.value} />;
    localStorage.setItem('breed',event.target.value)
     console.log(event.target.value)
    
    };
    return (
      <div>
        {/* <h2>Buscar por raza:</h2><button className="get-dog button"></button> */}

        <select style={{fontSize:'1.5em'}} onChange={handleChange}>
        { breedsArray.map((breedData, index) => (

          <option  key={index} value = {breedData.breed}>{breedData.breed}</option>)

          
        )}
      
        </select>
    
      </div>
    )
            
           
    
   
          }}
      

export default DogsList