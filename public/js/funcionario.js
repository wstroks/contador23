document.getElementById('form_funcionario').addEventListener('submit', submitForm);


const database = firebase.database();
const rooRef=database.ref('funcionario');

function submitForm(e){
    e.preventDefault();
    
    var Nome = getInputVal('Nome');
    var Cargo = getInputVal('Cargo');

    console.log(Nome +" " + Cargo);

    saveFuncionario(Nome, Cargo);
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveFuncionario(Nome, Cargo){
    //var novoFuncionario = cadastroFuncionario.push().key();
    const autoId= rooRef.push().key;
    rooRef.child(autoId).set({
        Nome: Nome,
         Cargo: Cargo,
    });
}