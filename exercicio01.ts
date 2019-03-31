var numeros = [0,1,2,3,4,5];

numeros.forEach(function(numero){

    if(numero % 2 === 0) {
        console.log('PAR: ' + numero);
    } else {
        console.log('IMPAR: ' + numero);
    }
});