let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'
//Permite traer la info desde la API
function fetchData(url_api, callback){
    //Se construye la petición
    let xhttp = new XMLHttpRequest()
    //método GET, url del api, async true
    xhttp.open('GET', url_api, true)
    //Si ocurre el cambio
    xhttp.onreadystatechange = function (event){
        //validación para saber si se puede ejecutar el callback
        // Estado 4 quiere decir que se ha completado la petición
        if(xhttp.readyState === 4){
            //Status de carga correcta 200
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const ERROR = new Error('Error '+ url_api)
                return callback(error, null)
            }
        }
    }

    //Aquí se envía la solicitud
    xhttp.send()
}

/**
 * Ejemplo de CALLBACK HELL
 */
fetchData(API, function(error1, data1){
    if(error1){
        return console.error(error1)
    }
    //Aquí accedo al primer personaje de la API
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2){
            return console.error(error2)
        }
        //Aquí accedo al primer personaje de la API
        fetchData(data2.origin.url, function (error3, data3){
            if(error3){
                return console.error(error3)
            }

            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})