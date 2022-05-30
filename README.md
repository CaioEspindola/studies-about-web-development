# Estudos-sobre-Desenvolvimento-Web
JavaScript - Programando na linguagem da Web.

Estudo baseado em uma tabela para calcular o IMC de pacientes.

Nesse estudo você encontrará diferentes técnicas em JavaScript para aplicar em desenvolvimento web, tais como:   

1. Variáveis, Escopo e Operadores:
2. Aplicando Arrays e Loop:
3. Criando e Delegando Eventos:
4. Criando e Deletando Elementos:
5. Validação de Formulários:
6. Trabalhando e aplicando filtros:
7. Aplicando AJAX para buscar pacientes:
8. Consumindo dados de uma API na plataforma Heroku:
9. Requisição HTTP e método “GET”: 
10. JSON (JavaScript Object Notation) e a importância do transformador JSON.parse:

**OBS:**
1. Segue abaixo no readme um resumo para reforçar o estudo teórico aplicado.
2. O código JavaScript está comentado como estudo da prática aplicada. 

# 1- Variáveis:

São espaços na memória do computador destinados a um dado que pode ser alterado durante a execução da aplicação. Utiliza-se nomes simbólicos para obter os valores em 
sua aplicação. O nome das variáveis são chamados de identificadores e obedecem a determinadas regras.

Geralmente são declaradas usando **var, let ou const**:

### **var:** 

Essa palavra-chave é usada em todo o código JavaScript de 1995 a 2015;<br/> 
Use quando desejar que o código seja executado em navegadores mais antigo;<br/>
Podem ser declaradas de novo e atualizadas;<br/>
Tem Escopo Global ou Escopo de Função.

### **let:** 

Essa palavra-chave foi introduzida no JS em 2015;<br/>
Podem ser atualizadas, mas não podem ser declaradas novamente;<br/>
Devem ser declaradas antes do uso;<br/>
Tem Escopo de Bloco.

### **const:** 

Essa palavra-chave foi introduzida no JS em 2015;<br/>
Não podem ser atualizadas e não podem ser declaradas novamente;<br/>
Não podem ser re-atribuídas;<br/>
Tem Escopo de Bloco.

# Escopo Global: 

É o espaço que está fora de qualquer classe, função ou namespace. Todas as variáveis declaradas neste espaço podem ser acessadas a qualquer momento e em qualquer lugar do seu código.

Quando uma variável é declarada dentro do escopo de uma função, por exemplo, significa que ela está disponível e pode ser acessada somente de dentro daquela função.

# Escopo de Bloco:

Antes do ES6 (2015), o JavaScript tinha apenas o Escopo Global e o Escopo de Função.
O ES6 introduziu duas novas palavras-chave importantes: 

Variáveis **let e const**, essas duas palavras-chave fornecem o Block Scope.
Variáveis declaradas dentro de um bloco { } não podem ser acessadas fora do bloco.

É bom ter em mente que cada função cria um novo escopo, portanto, variáveis diferentes mas com o mesmo nome podem existir dentro e fora da função.

# Operadores:

Operadores em Javascript são símbolos especiais que envolvem um ou mais operandos com a finalidade de produzir um determinado resultado.

São importantes porque permitem comparar e trabalhar com os valores das variáveis, fazendo algo com base no resultado dessa comparação. Por exemplo, se o resultado for verdadeiro, você executa um bloco de código, se for falso, você executa outro bloco de código.

Existem diversos tipos de operadores, alguns dos mais comuns estão nas tabelas de exemplo logo abaixo, que são os de Operadores de Atribuição e os Operadores Lógicos.

![operadores1](https://user-images.githubusercontent.com/99665225/170864839-d806afa4-b1dd-48ea-a452-c2820fd793dc.png)

![operadores2](https://user-images.githubusercontent.com/99665225/170864841-22d5f08f-a553-46fb-bbbb-2ac9b9a8fabe.png)


Porém, para estudar mais sobre os operadores acesse o link abaixo: 

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_logicos


# 2- Arrays:

Array faz parte dos objetos globais da linguagem e é utilizado para armazenar uma coleção de elementos em uma única variável. Na prática, o array é uma estrutura de dados que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array.

Nos auxilia pois podemos utilizar uma única variável para armazenar uma lista de diferentes elementos. Por exemplo, neste estudo seria necessário armazenar os nomes de todos os pacientes, criar uma variável para cada um deles seria trabalhoso, imagine quando a aplicação tem uma lista muito grande, seria complicado.

Seguindo esta ideia foi criado uma função para analisar possíveis erros dos usuários ao digitar no formulário. Aplicando então uma variável Array vazia, **var erros = [ ]**. Após declarar a variável, foi inserido algumas condições para as mensagens de erro e no final da função, após percorrer a array, solicitamos o return desses erros.

Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações. Saiba mais no link abaixo:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

# Loop:

Esses “laços” oferecem um jeito fácil e rápido de executar uma ação repetidas vezes. 

Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: Repetir uma ação múltiplas vezes. 

Os mecanismos de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros. Neste estudo foi declarado o tipo **for** para percorrer diversas vezes as listas de array, analisando e armazenando seus dados.

Saiba mais sobre as diversas declarações de loop e suas condições:

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration

# 3- Criando Eventos: 

Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da aplicação, seja ele um texto, uma imagem, ou uma div, por exemplo. Muitas das interações do usuário podem ser consideradas eventos.

Existe diversos tipos de eventos definidos para uso em JavaScript, abaixo podemos ver alguns dos mais comuns utilizados:

![eventos1](https://user-images.githubusercontent.com/99665225/170965866-ef2c86ba-a509-4500-ae62-a76c0c4feeb4.png)

Existem diversas maneiras de se aplicar esses eventos aos elementos HTML, porém neste estudo foi utilizado um novo tipo de mecanismo de evento, que fornece aos navegadores uma nova função chamada **addEventListener( )**. Isso funciona de maneira semelhante às propriedades do manipulador de eventos, mas a sintaxe é diferente.

Dentro da função **addEventListener( )**, especificamos dois parâmetros: O nome do evento para o qual queremos registrar esse manipulador, e o código da função do manipulador que queremos executar em resposta a ele. 

![eventos2](https://user-images.githubusercontent.com/99665225/170967074-8900284f-f171-4881-bb4d-f1d01217f338.png)

Esse mecanismo tem algumas vantagens sobre os mecanismos mais antigos. Para começar, há uma função de contraparte, **removeEventListener( )**, que remove um listener adicionado anteriormente. 

Eventos como **addEventListener( )**, são mais poderosos, mas também podem se tornar mais complexos e menos suportados por navegadores(suportados desde o Explorer 9). 

Saiba mais sobre os eventos aqui:

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events

# Delegação de eventos:

É basicamente um padrão para lidar com eventos de forma eficiente. Em vez de adicionar um ouvinte de evento a cada elemento semelhante, podemos adicionar um ouvinte de evento a um elemento “pai” e chamar o evento em um destino específico(“filho”) usando a propriedade **target.parentNode** do objeto de evento. Assim cria-se menos eventos e melhora a performance da aplicação.

Neste estudo adicionamos um evento ao elemento “pai” que é a TABELA da aplicação, que pode ter diversos “filhos” conforme eles são inseridos na tabela.

Sendo assim, o elemento “pai” reconhece esse target clicado como um de seus “filhos” no qual deverá executar o evento delegado.<br/> 
Confira no tópico abaixo.

# 4- Criando Elementos:

Para selecionar um elemento HTML usando a linguagem JavaScript. Os comandos mais comuns usados são: 

1. querySelector( ); 
2. querySelectorAll( );

Outras possibilidades são:

1. getElementById( );
2. getElementsByClassName( );
3. getElementsByTagName( );
4. getElementsByName( );

Para criar um elemento HTML usando a linguagem JavaScript:

O **document.createElement( )** é o método que cria um elemento HTML específico ou um **HTMLUnknownElement** se o nome do elemento for um dado não for reconhecido.

Ex: var elemento = document.createElement(nomeDaTag)

1. elemento é o objeto criado.
2. nomeDaTag é uma string que especifica o tipo do elemento a ser criado.

# Remoção de um elemento:

Neste estudo atribuímos um evento ao elemento “pai” para ele reconhecer qual “filho”(target) foi clicado. 

Para isso acontecer é necessário utilizar uma propriedade DOM chamada **parentNode**, que é somente leitura e que retorna o node(nó) parente de um node referenciado na árvore DOM.

Também foi adicionado uma classe para este evento com objetivo de fazer com que o elemento tenha como estilo CSS, uma  transição até ficar com opacidade zero. Para dar tempo do usuário acompanhar e perceber o elemento que está sendo removido.

Sendo necessário usar a função **setTimeOut** que funciona como um temporizador, para esperar alguns milissegundos antes do elemento ser removido definitivamente com **event.target.parentNode.remove( )**.

![evento_click_completo](https://user-images.githubusercontent.com/99665225/170971539-03d28da3-050b-42c9-bb57-490daa7135f5.png)

# 5- Validação de Formulário:

Uma das tarefas mais importantes no desenvolvimento web é a validação de dados por meio de formulários. É necessário criá-lo para receber as informações dos usuários, 
como também, é necessário verificar se esses dados informados são válidos.

Nós precisamos executar a validação de formulário toda vez que o usuário envia informações. Temos que garantir que os dados sejam inseridos no formato correto, que sejam do tipo que esperamos e que sejam seguros, pois dados inválidos ou incompletos podem causar erros na API do seu sistema.

A validação de formulários pode acontecer no lado do cliente ou do servidor. Porém, as práticas mais comuns utilizam os recursos de HTML5 e JavaScript, tendo em vista 
que essa atividade vai ser realizada no navegador do cliente.

Geralmente os dados mais comuns e importantes de ser validados são:

1. Validar o formato de campos como endereço de e-mail, telefone, CEP, CPF, nomes e senhas.
2. Verificar o preenchimento de campos obrigatórios.
3. Verificar se o dado é do tipo esperado para cada campo do formulário.
4. Verificar se o dado é válido.

### Validação com  HTML5:

Possui uma série de atributos que ajudam a validar os campos do formulário. Abaixo, alguns exemplos de validação utilizando esses atributos:
 
1. Tornar campos obrigatórios: required;
2. Restringir o tamanho do campo: (minlength, maxlength: Quando o tipo de dado for texto) ou (min e max: Quando o tipo de dado for numérico);
3. Restringir a um tipo de dado específico;
4. Especificando padrões de dados com pattern: Criando uma regex onde os dados do campo do formulário precisam obedecer. Quando o dado de entrada atende às condições dos atributos, ele recebe a **pseudoclasse: valid**. Do contrário, ele recebe a **pseudoclasse: invalid**.

### Validação com JavaScript: 

Pode ser feita de duas maneiras:

1. Validação inline utilizando JavaScript
2. Utilizando a API de validação de restrições do HTML5, quando houver necessidade de validações mais complexas ou de uma mensagem de erro mais detalhada.

Na prática deste estudo foi utilizado o JavaScript para validar o formulário. 

Foi criada uma função para analisar possíveis erros dos usuários ao digitar no formulário, onde nela incluímos uma variável de erros vazia , **var erros = [ ]**. Percorrendo assim a Array e rastreando os erros de acordo com as condições criadas para cada campo a ser preenchido, que neste caso foram nome, peso, altura e gordura. 

Dentro dessa função foi aplicado também o **método push( )** que adiciona um ou mais elementos ao final de um Array. 

Sendo assim, para cada campo do formulário foi definido algumas regras e caso o valor preenchido pelo usuário seja inválido ele receberá uma mensagem de erro informando-o sobre o ocorrido.

Saiba mais sobre validação de formulário aqui:

https://www.freecodecamp.org/portuguese/news/validacao-de-dados-como-verificar-dados-enviados-pelo-usuario-em-formularios-html-utilizando-javascript/


# 6- Trabalhando e aplicando filtros: 

Após criar o input  no HTML e ajustar o estilo no CSS, foi selecionado o input pelo javaScript, para acessar os valores que serão armazenados nele conforme o usuário digita. Em seguida, foi adicionado o evento de input, que é responsável por detectar quando o usuário começa a digitar:

![campoFiltro1](https://user-images.githubusercontent.com/99665225/170981807-be71ea53-05c8-4797-ab85-a32e1e1a70eb.png)

Foi aplicado a palavra-chave **this** do javaScript, que deixa mais específica a referência onde a função tem que ser executada, neste caso, o objetivo é o valor do filtro. A referência ao **this** sempre se refere a um objeto, contendo o seu valor.

Também foi criado uma **new RegExp** para o input da função, declarando assim, algumas condições e regras para o input.

![campoFiltro](https://user-images.githubusercontent.com/99665225/170982006-ff3570ac-8f8f-4729-bad0-a025f815a5c7.png)

# 7-Aplicando Ajax para buscar pacientes:

Primeiramente foi criado um botão no HTML para ser responsável de buscar os clientes em um servidor.

AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor. 

Ele pode enviar e receber informações em uma variedade de formatos, incluindo JSON, XML, HTML e outros.

![ajax1](https://user-images.githubusercontent.com/99665225/170994779-d7b9464b-2572-4d1e-bb45-4b9a5da82ae4.png)

Em seguida foi aberta a conexão com a API onde ficou configurado o método(tipo) da requisição e para qual endereço fazer.

![ajax2](https://user-images.githubusercontent.com/99665225/170994834-443480e8-4d6d-4e3d-823f-2c9d6838dbce.png)

Sendo assim, foi criado um evento “load” com uma função para analisar se(if) o status da requisição está ok (200), se estiver, o servidor retornará uma resposta.

Ao analisarmos os dados recebidos percebe-se que quase sempre são strings, por isso é  muito comum o uso do JSON nas trocas de dados entre cliente e servidor.

Sendo assim, também é comum analisar os dados aplicando o **JSON.parse( )**, pois assim os dados string convertem-se em objetos JavaScript.

![ajax3](https://user-images.githubusercontent.com/99665225/170994991-d22b0164-4e3a-4521-bc60-9318a5b3eacb.png)

# 8- Consumindo dados de uma API na plataforma Heroku.

Como vimos acima, durante o estudo foi feito uma requisição entre cliente e servidor.

Esse endereço aplicado é uma API(Interface de Programação de Aplicação) que disponibiliza os dados para o usuário, que está na plataforma Heroku.

Nem sempre saberemos como serão os dados e de que maneira eles foram gerados, pois eles muitas vezes se encontram disponibilizados e prontos para uso.

Heroku trata-se de uma PaaS (Plataforma como um Serviço) que permite hospedagem, configuração, testagem e publicação de projetos virtuais na nuvem. Entre outras funções, ele facilita o trabalho dos desenvolvedores na configuração da infraestrutura para o deploy, ou seja, a implantação das aplicações.

# 9- Requisições HTTP.

Para consumir os dados de um API precisamos estar atentos sobre o método de requisição HTTP. Neste estudo foi utilizado o método “GET”, mas existem outros, os mais comuns são:

GET, POST, PUT e DELETE. 

Além desses métodos, o protocolo HTTP oferece o HEAD, TRACE, OPTIONS e CONNECT.

Saiba mais a respeito das requisições aqui: 

https://www.w3schools.com/tags/ref_httpmethods.asp

# 10- JSON (JavaScript Object Notation)

JSON é uma notação que permite estruturar dados em formato texto para serem utilizados em diferentes tipos de sistemas. Trata-se de um formato simples e leve, que oferece uma série de benefícios quando comparado com a notação XML, tendo como maior velocidade no tráfego em rede e mais agilidade no processamento. Por isso, é amplamente utilizado em aplicações web, aplicativos móveis e como arquivo de configuração.

Uma maneira de utilização é por meio de requisições AJAX, em que a aplicação recupera os dados armazenados no servidor de hospedagem sem a necessidade de recarregar a página. Possibilitando diferentes interações com o Banco de Dados, como o MySql, para realizar operações como consulta, inclusão e exclusão de registros.

A transferência de dados entre aplicações é feita por meio de API (Application Programming Interface) que, entre outros formatos, utiliza a notação JSON para estruturar as informações trafegadas.

A simplicidade com que os dados são estruturados no formato JSON permite que ele seja utilizado em qualquer tipo de linguagem de programação. Além disso, ele pode ser manipulado em diferentes plataformas, como Windows, macOS, Linux, e em vários tipos de sistemas, como em aplicações web e aplicativos móveis.

Outra forma de utilização de arquivos .json é para o gerenciamento de projetos em diferentes linguagens de programação. O Node.js, por exemplo, utiliza um arquivo chamado package.json em seus projetos para armazenar as dependências utilizadas na aplicação.

É importante saber que existe outro formato utilizado para a troca de dados entre aplicações é o XML (Extensible Markup Language). Apesar de também ser um arquivo de texto, existem algumas diferenças entre os dois modelos, mas atualmente o JSON vem sendo mais utilizado por desenvolvedores e grandes empresas entre elas: 
Google, Yahoo, Facebook, Twitter e muitas outras.

Saiba mais sobre JSON e XML no link abaixo:
https://rockcontent.com/br/blog/json/
 
