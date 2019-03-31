var palavras = ["joao","paulo"];
maisculo(palavras);

function maisculo(palavras) {
    return palavras.map(function(palavra){
        console.log(palavra.toUpperCase());
    });
}