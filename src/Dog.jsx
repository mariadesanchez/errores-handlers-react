/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"



function Dog({breed}) {

    /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`
    );

    /* Según el status de conexión con la API, se muestra la información al usuario */
    if (status === statusList.LOADING) {
        return <p>Cargando...</p>;
    }
    if (status === statusList.SUCCESS) {
       
        const handleRefresh = () => {
            window.location.reload();
          };
    return (
        <div>  <button style ={{backgroundColor:'orange'}} onClick={handleRefresh}>Buscar</button>
            <h2>Has buscado por raza: {breed}</h2>
            <img src={data.message} />
          
        </div>
    )
      
    }
    if (status === statusList.ERROR) {
        return <p>Error al buscar una imagen para la raza: {breed}</p>;
      
    }
  
  
}

export default Dog;