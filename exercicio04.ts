var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

verifica(alunos, 7);

function verifica(alunos, media) {
    return alunos.filter(function(aluno){
        console.log(aluno.nome + " - " + (aluno.media >= media));
    });
}