//Variável criada para armazenar na memória um documento específico(Nesse caso, selecionado pela classe CSS)
var titulo = document.querySelector('.titulo')

//Com o textContent é possivel alterar um conteúdo específico do HTML.
titulo.textContent = 'Tabela: Índice de Massa Corporal'

//Variável criada para armazenar na memoria TODOS os documentos específicos(Nesse caso, selecionado pela classe CSS)
var pacientes = document.querySelectorAll('.paciente')

//loop FOR tem 3 declarações dentro dos().Uma variável i inicializando-a como 0; Ela verifica se i é menor que pacientes e executa essas duas primeiras instruções; e  então, acrescenta 1 a variável i após cada passagem pelo loop.

//length é uma propriedade que tem como responsabilidade retornar a quantidade de caracteres de uma string, o tamanho ou conteúdo de uma array.(Caso esteja vazio, é retornado o valor 0)

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var pesoTd = paciente.querySelector('.info-peso')
  var peso = pesoTd.textContent

  var alturaTd = paciente.querySelector('.info-altura')
  var altura = alturaTd.textContent

  var imcTd = paciente.querySelector('.info-imc')

  var pesoEhValido = validaPeso(peso)
  var alturaEhValida = validaAltura(altura)

  //Aqui foi aplicado o operador de negação "!", fazendo uma inversão de papeis entre true e false.(Ficando assim, se pesoNãoEhValido...)
  if (!pesoEhValido) {
    pesoEhValido = false
    imcTd.textContent = 'Peso inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (!alturaEhValida) {
    alturaEhValida = false
    imcTd.textContent = 'Altura inválida'
    paciente.classList.add('paciente-invalido')
  }

  //Calculando o IMC e usando Operadores lógico;
  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura)
    imcTd.textContent = imc
  }
}

function calculaImc(peso, altura) {
  var imc = 0

  imc = peso / (altura * altura)

  return imc.toFixed(2) //Aplicado para definir a quantidade de casa decimais.
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 500) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3.0) {
    return true
  } else {
    return false
  }
}
