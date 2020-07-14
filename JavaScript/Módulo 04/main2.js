var inputElemenet = document.querySelector('input');
var userName = inputElemenet.value;
var listElement = document.querySelector('ul');
var btnElement = document.querySelector('button');


user_repo = []

function renderRepositories(){
        
        listElement.innerHTML = " ";

        for(repo of user_repo){
                const listItem = document.createElement('li');
                const textList = document.createTextNode(`https://api.github.com/users/${repo}/repos`);


                listItem.appendChild(textList);
                listElement.appendChild(listItem);
        }
} 


btnElement.onclick = function(){return (inputElemenet.value == "") ? alert('Preencha o campo') : addToList();}

//render loading li

function renderLoading(loading){
        listElement.innerHTML = "";
        

        var listItem =  document.createElement('li');
        var textItem =  document.createTextNode('Carregando...')

        listItem.appendChild(textItem);
        listElement.appendChild(listItem);
}


function errorMessage(load){

        var listItem = document.createElement('li');
        var textItem = document.createTextNode('Erro! XXX')

        listItem.style.color = 'red';

        listItem.appendChild(textItem);
        listElement.appendChild(listItem);
}




function addToList(){
        var userName = inputElemenet.value;
        user_repo.push(userName);
        if(!userName) return; renderLoading();
        //renderRepositories();

        axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(function(response){
                renderRepositories(response)
                console.log(response)
        })
        .catch(function(){
                errorMessage();
        })
 }