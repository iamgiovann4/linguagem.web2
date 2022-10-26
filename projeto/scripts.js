var novoP = new Array();
var novoI = new Array();

function cadastrarPessoas() {
    var cadastroP = new Array();

    var iNome = document.getElementById('name');
    var iChild = document.getElementById('kids');
     
    cadastroP.nome = iNome.value;
    cadastroP.qtdChild = iChild.value;

    novoP.push(cadastroP); // o array de dentro da função irá ser empurrado para o array fora da função.
    console.log(novoP);

    x(); //função x
    y(); //função y
    iNome.value="";
    iChild.value=""; //como se fosse uma cx em branco que irá receber um texto.
}

function cadastrarIngredientes() { 
    var cadastroI = new Array();

    var iIngrediente = document.getElementById('ingrediente');
    var iqtdA = document.getElementById('qtdA');
    var iqtdC = document.getElementById('qtdC');
    var ivalor = document.getElementById('valor');

    // var iqtd = parseFloat(iqtdA) + parseFloat(iqtdC); //soma a quantidade em kg/g dos ingredientes.

    cadastroI.ingt = iIngrediente.value;
    cadastroI.qtdA = iqtdA.value;
    cadastroI.qtdC = iqtdC.value;
    cadastroI.valor = ivalor.value;

    novoI.push(cadastroI);
    console.log(novoI);

    x(); //função y
    z(); //função z
    iIngrediente.value="";
    iqtdA.value="";
    iqtdC.value="";
    ivalor.value="";
}

// function excluirPessoa(e) {
//     console.log("Excluindo"+e.value);
//     cadastros.splice(e.value,1);
//     x();
//     y();
//     z();
// }

function x() {
    var corpoTabela1 = document.getElementById("corpoTabela1");
    corpoTabela1.innerHTML=""; //O corpo tabela 1 irá receber um texto.

    for (var i = 0; i < novoP.length; i++) {
        var trPessoa = document.createElement("tr"); //tr é linha.
        var td1 = document.createElement("td"); //td é célula dentro da linha.

        var cadastroP = novoP[i];

        td1.innerText=cadastroP.nome;
        trPessoa.appendChild(td1);

        corpoTabela1.appendChild(trPessoa);


        // INSERIR O VALOR
        for (var j = 0; j < novoI.length; j++) {
            td6 = document.createElement("td");
            
            var cadastroI = novoI[j];
            
            // qtdTotal = parseFloat(cadastroI.qtdA) + parseFloat(2 * (cadastroI.iqtdC * cadastroI.valor));
            
            td6.innerText = "Oiiii";
            trPessoa.appendChild(td6);

            corpoTabela1.appendChild(trPessoa);
        }
    }
}

function y() {
    var corpoTabela2 = document.getElementById("corpoTabela2");
    corpoTabela2.innerHTML=""; //O corpo tabela 2 irá receber um texto.

    for (var index = 0; index < novoP.length; index++) {
        var trDependentes = document.createElement("tr"); //tr é linha.
        var td2 = document.createElement("td"); //td é célula dentro da linha.
        var td3 = document.createElement("td"); //td é célula dentro da linha.

        var cadastroP = novoP[index];

        td2.innerText=cadastroP.nome;
        trDependentes.appendChild(td2);

        td3.innerText=cadastroP.qtdChild;
        trDependentes.appendChild(td3);

        corpoTabela2.appendChild(trDependentes);
    }
}

function z() {
    var corpoTabela3 = document.getElementById("corpoTabela3");
    corpoTabela3.innerHTML=""; //O corpo tabela 3 irá receber um texto.

    for (var index = 0; index < novoI.length; index++) {
        var trIngredientes = document.createElement("tr"); //tr é linha.
        var td4 = document.createElement("td"); //td é célula dentro da linha.
        var td5 = document.createElement("td"); //td é célula dentro da linha.

        var cadastroI = novoI[index];

        td4.innerText = cadastroI.ingt;
        trIngredientes.appendChild(td4);

        tqtd = parseFloat(cadastroI.qtdA) + parseFloat(cadastroI.qtdC);
        td5.innerText = tqtd;
        trIngredientes.appendChild(td5);

        corpoTabela3.appendChild(trIngredientes);
    }
}

// function v() {
//     var corpoTabela1 = document.getElementById("corpoTabela1");
//     corpoTabela1.innerText="";

//     for (var index = 0; index < novoI.length; index++) {
//         var trPessoa = document.createElement("tr");
//         td6 = document.createElement("td");

//         var cadastroI = novoI[index];

//         qtdTotal = parseFloat(cadastroI.qtdA) + parseFloat(2 * (cadastroI.iqtdC * cadastroI.valor));

//         td6.innerText = qtdTotal;
//         trPessoa.appendChild(td6);

//         corpoTabela1.appendChild(trPessoa);
//     }
// }