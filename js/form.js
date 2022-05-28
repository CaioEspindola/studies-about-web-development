var botaoClicado = document.querySelector('#adicionar-paciente')
botaoClicado.addEventListener('click', mostraMensagem)

function mostraMensagem(event) {
  event.preventDefault()

  //Acessando o formulário por um ID criado:
  var form = document.querySelector('#form-adiciona')

  //Extraindo informações dos pacientes no formulário:
  var paciente = dadosDoFormulario(form)

  //Percorrendo todo o comprimento do array da lista de erros:
  var erros = validaPaciente(paciente)
  if (erros.length > 0) {
    exibeMensagensDeErros(erros)
    return
  }

  adicionaPacienteNaTabela(paciente)

  form.reset() //Para limpar o formulário após uso.
  var ulMensagensErro = document.querySelector('#mensagens-erro')
  ulMensagensErro.innerHTML = ''
}

function adicionaPacienteNaTabela(paciente) {
  //Criando elementos, no caso o paciente(TR e TD, que são linhas e colunas da tabela):
  var pacienteTr = montaTr(paciente)

  //Adicionando elemento na tabela:
  var tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)
}

function dadosDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr') //Cria o elemento tr(TR linha).
  pacienteTr.classList.add('paciente') //Adiciona classe para o elemento criado.

  //Após criar um elemento "Pai"(TR linha), foi adicionado 5 filhos(TD colunas), com cada campo já preenchindo com os dados do usuário.
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  //Criando uma Array para "chamar" diversas possibilidades de mensagem de erro.
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome não é válido')
  }

  if (paciente.peso.length == 0) {
    erros.push('O peso não é válido')
  }

  if (paciente.altura.length == 0) {
    erros.push('A altura não é válida')
  }

  if (paciente.gordura.length == 0) {
    erros.push('A gordura não é válida')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('O peso não é válido')
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('A altura não é válida')
  }

  return erros
}

function exibeMensagensDeErros(erros) {
  var ul = document.querySelector('#mensagens-erro')
  //Essa propriedade permite que o JavaScript altere o HTML, nesse caso é para ativar as mensagens de erro.
  ul.innerHTML = ''
  //For Each(para cada). Aplica uma função para cada elemento dentro da lista Array.
  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })

  for (var i = 0; i < erros.length, i++; ) {
    var erro = erros[i]
  }
}
