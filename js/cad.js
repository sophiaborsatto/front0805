//cadastro
//json: objetos do javascript representados por {chaves} 
//{'nome': 'maria'}
const botao = document.getElementById('btnCadastrar');

botao.addEventListener('click', 
    function(){
        const user = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }  
        let users = [];
        users.push(user); //lista - entrada
        let listaUsuarios = JSON.stringify(users); //criar uma memoria e guarda nele JSON
        localStorage.setItem("users", listaUsuarios); //set na memoria, listas de usuarios (ARMAZENANDO NA MEMORIA)

    }
);