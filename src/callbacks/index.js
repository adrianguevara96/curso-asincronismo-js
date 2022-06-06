//Una función que recibe otra función como parámetro se le denomina función de orden superior (higher-order function).
//El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.

function sum (value1, value2) {
    return value1 + value2;
}

function calc(value1, value2, callback) {
    return callback(value1, value2);
}

console.log(calc(6,2,sum));

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);