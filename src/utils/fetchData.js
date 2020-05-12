let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


const fetchData = (url_api, callback) =>{

    return new Promise((resolve, reject) => {

        const xhttp = new XMLHttpRequest()
        //método GET, url del api, async true
        xhttp.open('GET', url_api, true)
        //Si ocurre el cambio
        xhttp.onreadystatechange =  (() => {
            //validación para saber si se puede ejecutar el callback
            // Estado 4 quiere decir que se ha completado la petición
            if(xhttp.readyState === 4){

                //If
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
                
            }
        })
        xhttp.send()
    })    

}

module.exports = fetchData