var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('table')

//Atribuindo evento ao elemento "Pai", para ele reconhecer qual "Filho" foi o TARGET clicado, para então aplicar a função.
tabela.addEventListener('click', function (event) {
  event.target.parentNode.classList.add('deletar-paciente')

  //Dica: Quando estiver implementando uma remoção, fazer essa combinação de CSS com JS (usando transition e opacity no css) e (setTimeout no JS)
  //Função de tempo no JS, determina quanto tempo vai esperar para executar a função, trabalhando com mili segundos.
  setTimeout(function () {
    event.target.parentNode.remove()
  }, 600)
})
