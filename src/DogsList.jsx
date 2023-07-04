/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"



function DogsList() {

    /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breeds/list/all`
    );

    /* Según el status de conexión con la API, se muestra la información al usuario */
    if (status === statusList.LOADING) {
        return <p>Cargando...</p>;
    }
    if (status === statusList.SUCCESS) {
       
         
    return (
      <div>
        <h2>Datos en forma de array:</h2>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    );
            
           
    
   
          }}

export default DogsList