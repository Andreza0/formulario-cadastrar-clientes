function executarPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body));

    request.onLoad = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarCliente() {
    event.preventDefault();
    let url = "http://127.0.0.1:3333"
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let logradouro = document.getElementById("logradouro").value
    let numero_endereco = document.getElementById("numero_endereco").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value

    var estado = document.getElementById("estado1")
    var estado_value = estado.options[estado.selectedIndex].value
    var cidade = document.getElementById("cidade1")
    var cidade_value = cidade.options[cidade.selectedIndex].value
    var tipo_endereco_value = document.querySelector('input[name="tipoendereco"]:checked').value;

    console.log(cpf)
    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(logradouro)
    console.log(numero_endereco)
    console.log(complemento)
    console.log(bairro)
    console.log(estado_value)
    console.log(cidade_value)
    console.log(tipo_endereco_value)

    // Objeto Javascript
    body = {
        "cpf": cpf,
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "logradouro": logradouro,
        "numero_endereco": numero_endereco,
        "complemento": complemento,
        "bairro": bairro,
        "estado": estado_value,
        "cidade": cidade_value,
        "tipo_endereco": tipo_endereco_value
    }

    executarPost(url, body)

}