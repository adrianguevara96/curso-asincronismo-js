//Buscar la dimension del primer persona de la API de Rick&Morty
//usando Promise

const fetchData = require('../utils/fetchData');
let url = 'https://rickandmortyapi.com/api/character/';


fetchData(url)
    .then( data => {
        console.log(data.info.count);
        return fetchData(`${url}${data.results[0].id}`)
            .then( data => {
                console.log(data.name);
                return fetchData(data.origin.url)
                    .then( data => {
                        console.log(data.dimension);
                    })
                    .catch( err => {
                        console.error(err)
                    })
            })
    })