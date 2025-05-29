//json: objetos do javascript representados por {chaves} 
//{'nome': 'maria'}
// || = OU

// cadastro 
const botao = document.getElementById('btnCadastrar');

// cadastrar
botao.addEventListener('click',
    function () {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //localStorage é uma memória do computador
        const usuario = {
            login: document.getElementById('login').value,
            senha: document.getElementById('senha').value
        }

        const indexEditando = document.getElementById('indexEditar').value;
        if(indexEditando !== ""){
            usuarios[indexEditando] = usuario;
            document.getElementById('indexEditar').value = "";
        }else{
            usuarios.push(usuario);
        }
        
        let listaUsuarios = JSON.stringify(usuarios);
        localStorage.setItem("usuarios", listaUsuarios);
        document.getElementById('login').value = '';
        document.getElementById('senha').value = ''; 
        listar();
    }
);

//listar
function listar(){
    const listaUsuarioCad = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(listaUsuarioCad);
    const tabelaListaUsuarios = document.getElementById('listaUsuarios');
    tabelaListaUsuarios.innerHTML = "";

    //forEach percorrendo o vetor e apresentando Login e Senha 
    listaUsuarioCad.forEach((usuario, index) => { //função for que percorre o vetor (para cada)
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.login}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Remover</button>
            </td>
        `;
        tabelaListaUsuarios.appendChild(linha);
    });
}

//remover
function excluirUsuario(index){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"))||[];

    if (confirm("Você realmente deseja excluir?")){
        listaUsuariosCadastrados.splice(index, 1);
        listaJson = JSON.stringify(listaUsuariosCadastrados);
        localStorage.setItem("usuarios", listaJson);
        listar();
    }
}

function editarUsuario(index){
    const listaUsuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"))||[];
    const usuario = listaUsuariosCadastrados[index];
    document.getElementById('login').value = usuario.login;
    document.getElementById('senha').value = usuario.senha;
    document.getElementById('indexEditar').value = index;
}

listar();