let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url = 'https://rickandmortyapi.com/api/character/';

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    //tercer valor para activar el async
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
        //Si se ha completado la peticion: estado 4
        /* 
            estado 0: inicializado
            estado 1: cargando
            estado 2: ya se cargó
            estado 3: ya hay información
            estado 4: solicitud completa
        */
        if(xhttp.readyState === 4){
            /*
                ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
                ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
                ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
                ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
                ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
            //Si la peticion trajo respuesta
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error(`Error ${url}`);
                return callback(error, null);
            }
        }
    }
    //Enviar solicitud
    xhttp.send();
}

function test(error, success){
    console.log({error, success});
}

//fetchData(url, test);

//Callback hell;
fetchData(url, function (error1, data1){
    if(error1) return console.error(error1);

    fetchData(url + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);

        fetchData(data2.origin.url, function (error3, data3){
            if(error3) return console.error(error3);

            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
});