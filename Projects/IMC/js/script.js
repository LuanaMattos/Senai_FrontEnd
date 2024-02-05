function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
  
  //PARA PEGAR VALORES DENTRO DE UMA INPUT: document.getElementById('<nome do id>').value
  // input type=text 
  // input type=number -> idade = inteiro => parseInt (document.getElementById('<nome do id>').value) CONVERSÃO DO TEXTO EM INTEIRO
  // input type=number -> peso/altura = real  => parseFloat (document.getElementById('<nome do id>').value)  CONVERSÃO DO TEXTO EM REAL
  
  //VALIDAÇÃO DOS VALORES DIGITADOS
    if (isNaN(peso)    //isNot_a_Number  +
        || isNaN(altura) // Operadores lógicos E OU NÃO  && - || - !
        || peso <= 0   // (verdadeiro (if) ou falso (else))
        || altura <= 0 // Se uma das condições for verdadeira,entra no se
    
        
        ) 
        {
      alert('Por favor, digite valores válidos para peso e altura.');
           document.getElementById('nome').value
      return;
    }
    
  
    var imc = peso / (altura * altura);
    var resultadoElement = document.getElementById('resultado');
    var resultadoContainer = document.getElementById('resultado-container');
  
    var resultadoTexto = nome + ', seu IMC é: ' + imc.toFixed(2) + '. ';
  
    if (imc < 18.5) {
      resultadoTexto += 'Abaixo do peso. Para melhorar, procure um nutricionista para orientação e siga uma dieta equilibrada.';
    } 	
    else if (imc < 24.9) {
      resultadoTexto += 'Peso normal. Continue mantendo um estilo de vida saudável com alimentação balanceada e exercícios físicos.';
    } else if (imc < 29.9) {
      resultadoTexto += 'Sobrepeso. Recomenda-se adotar uma dieta equilibrada e aumentar a prática de atividades físicas.';
    } else if (imc < 34.9) {
      resultadoTexto += 'Obesidade I. Consulte um médico e um nutricionista para desenvolver um plano de perda de peso seguro e eficaz.';
    } else if (imc < 39.9) {
      resultadoTexto += 'Obesidade II. É crucial buscar orientação médica e seguir um plano de alimentação saudável, juntamente com atividades físicas regulares.';
    } else {
      resultadoTexto += 'Obesidade III. Procure ajuda médica imediatamente para desenvolver um plano de tratamento abrangente, incluindo mudanças na dieta e exercícios físicos supervisionados.';
    }
  
    resultadoElement.innerHTML = resultadoTexto;
    resultadoContainer.style.display = 'block';
  }