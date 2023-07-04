/* 
    Custom Hook 
    Se encarga de buscar un perro por raza en la API
*/
import { useEffect, useState, useCallback } from "react";

/* Posibles status al buscar (GET) en la API */
export const statusList = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    LOADING: "LOADING"
};

export const useFetch = (url) => {

    const [status, setStatus] = useState(statusList.LOADING);
    const [data, setData] = useState();

    const fetchData = useCallback(async () => {

        setStatus(statusList.LOADING);

        try {
            const response = await fetch(url);

            /* En caso de que la respuesta no sea exitosa (equivale a status != 200) */
            if (!response.ok) {
                throw Error("Error al realizar la solicitud en la API"); //Arroja una excepción personalizada
            }

            const json = await response.json();
            setData(json);
            setStatus(statusList.SUCCESS);

        } catch (error) {
            setStatus(statusList.ERROR);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, status };
}