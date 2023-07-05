/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"
import DogsList from './DogsList'



function Dog() {
    const breed = localStorage.getItem('breed')
    /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`
    );

    /* Según el status de conexión con la API, se muestra la información al usuario */
    if (status === statusList.LOADING) {
        return <p>Cargando...</p>;
    }
    if (status === statusList.SUCCESS) {
       
   
        const handleRefresh = () => {
            window.location.reload(); // Recargar la página
          };
              
    return (
        <div style={{backgroundColor:'#ECE6E5'}}>
            <p style={{fontSize:'1.5em'}}>https://dog.ceo/api/breed/<input value ={breed} style={{fontSize:'1em'}}></input>/images/random<button style={{backgroundColor:'#6699ff'}} onClick={handleRefresh}>Fetch</button></p>
          
            {/* <h2>Buscaste la raza: {breed}</h2> */}
            <img src={data.message} />
          
        </div>
    )
      
    }
    if (status === statusList.ERROR) {
        return <p>Error al buscar una imagen para la raza: {breed}</p>;
      
    }
  
  
}

export default Dog;