//Promise - ES6

const somethingWillHappen = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('somethingWillHappen: Whoops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            setTimeout( () => {
                resolve('True');
            }, 2000)
        }else{
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then( response => console.log(response))
    .catch( err => console.error(err));


//Correr varias promesas al mismo tiempo, encadenadas
//su respuesta es que todas las promisas estan ok o algun error en alguna promesa
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results: ', response)
    })
    .catch(err => console.error("err: Promise.all, ", err));
    