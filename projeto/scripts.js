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
y(); //função y
    x(); //função x
    
    iNome.value="";
    iChild.value=""; //como se fosse uma cx em branco que irá receber um texto.
}

function cadastrarIngredientes() { 
    var cadastroI = new Array();

    var iIngrediente = document.getElementById('ingrediente');
    var iqtdA = document.getElementById('qtdA');
    var iqtdC = document.getElementById('qtdC');
    var ivalor = document.getElementById('valor');

    cadastroI.ingt = iIngrediente.value;
    cadastroI.qtdA = iqtdA.value;
    cadastroI.qtdC = iqtdC.value;
    cadastroI.valor = ivalor.value;

    novoI.push(cadastroI);
    console.log(novoI);
    
    z(); //função z
    x(); //função x
    
    iIngrediente.value="";
    iqtdA.value="";
    iqtdC.value="";
    ivalor.value="";
}

function x() {
    var corpoTabela1 = document.getElementById("corpoTabela1");
    corpoTabela1.innerHTML=""; //O corpo tabela 1 irá receber um texto.

   

    for (var i = 0; i < novoP.length; i++) {
        
    var trPessoa = document.createElement("tr"); //tr é linha.
    var tdNome = document.createElement("td"); //td é célula dentro da linha.
    var tdValorTotal = document.createElement("td");
        
        var cadastroP = novoP[i];

        tdNome.innerText=cadastroP.nome;
        trPessoa.appendChild(tdNome);

        tdValorTotal.innerText='R$ 00,00';
        trPessoa.appendChild(tdValorTotal);

        corpoTabela1.appendChild(trPessoa);
        
        var total = 0;

        for (var j = 0; j < novoI.length; j++) {
            
            var cadastroI = novoI[j];
            
            var valorTotal = ((parseFloat(cadastroI.qtdA) + (parseFloat(cadastroI.qtdC) * parseFloat(cadastroP.qtdChild))) / 1000) * parseFloat(cadastroI.valor);
            
            total += valorTotal;

            tdValorTotal.innerText = "R$ " + total;
            trPessoa.appendChild(tdValorTotal);
   
            corpoTabela1.appendChild(trPessoa);
        }
    }
}

function y() {
    var corpoTabela2 = document.getElementById("corpoTabela2");
    corpoTabela2.innerHTML=""; //O corpo tabela 2 irá receber um texto.

    for (var i = 0; i < novoP.length; i++) {
        var trDependentes = document.createElement("tr"); //tr é linha.
        var tdNome2 = document.createElement("td"); //td é célula dentro da linha.
        var tdNum = document.createElement("td"); //td é célula dentro da linha.

        var cadastroP = novoP[i];

        tdNome2.innerText=cadastroP.nome;
        trDependentes.appendChild(tdNome2);

        tdNum.innerText=cadastroP.qtdChild;
        trDependentes.appendChild(tdNum);

        corpoTabela2.appendChild(trDependentes);
    }
}

function z() {
    var corpoTabela3 = document.getElementById("corpoTabela3");
    corpoTabela3.innerHTML=""; //O corpo tabela 3 irá receber um texto.

    for (var i = 0; i < novoI.length; i++) {
        
            var trIngredientes = document.createElement("tr"); //tr é linha.
            var tdNomeIng = document.createElement("td"); //td é célula dentro da linha.
            var tdQuantidade = document.createElement("td"); //td é célula dentro da linha.
            
            var cadastroI = novoI[i];
            
            tdNomeIng.innerText = cadastroI.ingt;
            trIngredientes.appendChild(tdNomeIng);

        for (var j = 0; j < novoP.length; j++) {
            

            var cadastroP = novoP[j];
            
            
            

            var contaFinal = (parseFloat(cadastroI.qtdA) + (parseFloat(cadastroI.qtdC)* parseFloat(cadastroP.qtdChild)) + ' g');
            
            tdQuantidade.innerText = contaFinal;
            trIngredientes.appendChild(tdQuantidade);
            
            corpoTabela3.appendChild(trIngredientes);
        }
        
        
    }
}