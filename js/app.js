function comprar () {
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (tipo == "pista") {
        comprarPista(quantidade);

    } else if (tipo == "superior"){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista (quantidade) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (quantidade > qtdPista) {
        alert ("Quantidade Indisponivel para Tipo Pista");
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert ("Compra realizada com sucesso");
    }
}

function comprarSuperior (quantidade) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (quantidade > qtdSuperior) {
        alert ("Quantidade Indisponivel para Tipo Superior");
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert ("Compra realizada com sucesso");
    }
}

function comprarInferior (quantidade) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (quantidade > qtdInferior) {
        alert ("Quantidade Indisponivel para Tipo Inferior");
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert ("Compra realizada com sucesso");
    }
}

