//garante que a página HTML seja carregada por completo antes que meu documento JS inicialize
window.onload = function () {

    var idade = document.querySelector('#idade');
    var btnElement = document.querySelector('#verificar');
    var mensagem = document.querySelector('.message');

    //estabelecendo a ação do meu button
    btnElement.onclick = function(){
    
    mensagem.innerHTML = "Confira o resultado em  F12 -> Console"

    function verificaIdade(idade) {
        //inicializando minha promessa
        return new Promise(function (res, rej) {
            //definindo o tempo de delay para a minha resposta de acordo com o que o usuário digitar
            setTimeout(function () {
                if (idade.value > 18 || idade.value == 18) {
                    res();
                } else {
                    rej();
                }
            }, 2000)
            //2000 = milisegundos:  2 segundos.  Tempo solicitado no enunciado da atividade
        })
    }

    //retorna no console os valores especificados em then e catch de acordo com o que for digitado
    verificaIdade(idade)
        .then(function () { console.log('Maior de idade') })
        .catch(function () { console.log('Menor de idade') })



    }
}