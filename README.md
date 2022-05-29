# Estudos-sobre-Desenvolvimento-Web
JavaScript - Programando na linguagem da Web.

Estudo baseado em uma tabela para calcular o IMC de pacientes.

Nesse estudo você encontrará diferentes técnicas em JavaScript para aplicar em desenvolvimento web, tais como:   

1. Variáveis, Escopo e Operadores:
2. Aplicando Arrays e loop:
3. Criando e Delegando Eventos:
4. Criando e Deletando Elementos:
5. Validação de Formulários:
6. Trabalhando e aplicando filtros:
7. Aplicando AJAX para buscar pacientes:
8. Consumindo dados de uma API na plataforma Heroku:
9. Requisição HTTP e método “GET”: 
10. JSON (JavaScript Object Notation) e a importância do transformador JSON.parse:

OBS:
1. Segue abaixo no readme um resumo do estudo teórico aplicado.
2. O código JavaScript está comentado como estudo da prática aplicada. 

# 1- Variáveis:

São espaços na memória do computador destinados a um dado que pode ser alterado durante a execução da aplicação. Utiliza-se nomes simbólicos para obter os valores em 
sua aplicação. O nome das variáveis são chamados de identificadores e obedecem a determinadas regras.

Geralmente são declaradas usando var, let ou const:

### **var:** 

Essa palavra-chave é usada em todo o código JavaScript de 1995 a 2015;
Use quando desejar que o código seja executado em navegadores mais antigo;
Podem ser declaradas de novo e atualizadas;
Tem Escopo Global ou Escopo de Função.

### **let:** 

Essa palavra-chave foi introduzida no JS em 2015;
Podem ser atualizadas, mas não podem ser declaradas novamente;
Devem ser declaradas antes do uso;
Tem Escopo de Bloco.

### **const:** 

Essa palavra-chave foi introduzida no JS em 2015;
Não podem ser atualizadas e não podem ser declaradas novamente;
Não podem ser re-atribuídas;
Tem Escopo de Bloco.

### **Escopo Global:** 

É o espaço que está fora de qualquer classe, função ou namespace. Todas as variáveis declaradas neste espaço podem ser acessadas a qualquer momento e em qualquer lugar do seu código.

Quando uma variável é declarada dentro do escopo de uma função, por exemplo, significa que ela está disponível e pode ser acessada somente de dentro daquela função.

### **Escopo de Bloco:**

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




 

