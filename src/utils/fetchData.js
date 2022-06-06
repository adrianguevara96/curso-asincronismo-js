let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let url = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url) => {
    return new Promise( (resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = ( () => {
            if( xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject (new Error('Error', url));
            }
        })
        //Enviar solicitud
        xhttp.send();
    });
}

//porque se usa NODE y usa CommonJS
module.exports = fetchData;