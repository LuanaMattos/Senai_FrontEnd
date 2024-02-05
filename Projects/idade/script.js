function Idade() {

    var nome = document.getElementById("nome").value;
    var dataNasc = new Date(document.getElementById("dataNasc").value);
    // var idade = parseInt(document.getElementById("idade").value);
    var dataAtual = new Date(); 
    var idade = dataAtual.getFullYear() - dataNasc.getFullYear()
    //getFullYear ele considera do os 4 digitos do ano

	document.getElementById("exibirIdade").innerHTML = nome + ", sua idade é" + idade + "anos";
}	



function Limpar() {
        document.getElementById("nome").value = "";
        // document.getElementById("idade").value = ""; 
        document.getElementById("dataNasc").value = "";
        document.getElementById("exbirIdade").innerHTML = "";
}
	/*"Sua idade é: " + idade + " anos.";*/
