var botaoAdicionar = document.querySelector('#buscar_paciente')

botaoAdicionar.addEventListener('click', function () {
  //Responsável por fazer requisições entre cliente e servidor
  var xhr = new XMLHttpRequest()

  //Função responsável por abrir a conexão; configurar o método(tipo) da requisição; e também definir em qual o endereço será solicitado a requisição.
  xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes')

  //Evento que ficará "escutando" se a resposta da requisição foi carregada corretamente, ou não.
  xhr.addEventListener('load', function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText
      //Função "JSON.parse" funciona como um transformador de respostas Json(geralmente strings) para objetos javaScript.
      var pacientes = JSON.parse(resposta)
      //forEach: Para cada paciente percorrido na lista array, adicione na tabela.
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente)
      })
    } else {
      var erroAjax = document.querySelector('#erro-ajax')
      erroAjax.classList.remove('erro-invisivel')
    }
  })
  //função que realmente enviará a requisição
  xhr.send()
})
