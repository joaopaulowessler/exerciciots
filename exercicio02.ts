var numeros = [0,1,2,3,4,5];

dobrar(numeros);

function dobrar(numeros) {

    return numeros.map(function(numero){
        console.log(numero * 2);
    });
}