var campoFiltro = document.querySelector('#filtrar-tabela')

//input é um evento que detecta quando o usuário digita no campo.
campoFiltro.addEventListener('input', function () {
  var pacientes = document.querySelectorAll('.paciente')

  //O método this deixa mais específico o local onde a função tem que ser executada. Aqui o objetivo é o valor do filtro.
  if (this.value.length > 0) {
    //Declaração for para percorrer uma lista array.
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      var nomeTd = paciente.querySelector('.info-nome')
      var nome = nomeTd.textContent
      var expressao = new RegExp(this.value, 'i') //i = case Insensitive (letras maiúsculas e minúsculas)

      //O método test verifica se na var nome terá valores que a expressão regular aplicada aceite. Retornando true or false
      if (!expressao.test(nome)) {
        paciente.classList.add('esconder-paciente')
      } else {
        paciente.classList.remove('esconder-paciente')
      }
    }
  } else {
    //Declaração for para percorrer uma lista array. Foi aplicado para garantir que quando não houver nenhum character digitado mostre todos os pacientes da tabela.
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      paciente.classList.remove('esconder-paciente')
    }
  }
})
