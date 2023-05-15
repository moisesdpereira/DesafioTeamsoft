# Desafio Teamsoft - Moisés

## Sobre o Projeto
O projeto é uma aplicação backend desenvolvida com Laravel e Node.js com Express, sendo a principal baseada em Laravel. Ela proporciona uma estrutura de APIs rest.

## Proposta
NODE
npm install

A API possui as operações básicas de Cadastro, Leitura, Alteração e Remoção de Clientes com endereço, com entidades separadas, um cliente pode ter mais de um endereço
## Cliente
* CNPJ (Obrigatório)
* Razão Social (Obrigatório)
* Nome do Contato (Obrigatório)
* Telefone (Obrigatório)

## Endereço
* Logradouro (Obrigatório)
* Número (Obrigatório)
* Complemento
* Bairro (Obrigatório)
* Cidade (Obrigatório)
* Estado (Obrigatório)
* CEP (Obrigatório)
* Latitude (Somente leitura, bonus points)
* Longitude (Somente leitura, bonus points)

## Documentação
Este projeto oferece documentação Swagger para cada linguagem utilizada. A documentação está localizada na pasta documentation de cada linguagem.

- Para a aplicação em Laravel, a documentação Swagger pode ser encontrada em laravel/documentation.
  - Para acessar a documentação Swagger, siga as etapas abaixo:
    - Acesse a pasta documentation 
    - Executar **[npm start]**
    - Depois acessar **http://localhost:8080/docs/**

- Para a aplicação em Node.js com Express, a documentação Swagger está disponível em node/documentation.
A documentação Swagger é uma ferramenta poderosa que permite visualizar e testar as APIs de forma interativa. Ela fornece uma descrição completa dos endpoints, parâmetros, respostas e exemplos de uso.
    - Para acessar a documentação Swagger, siga as etapas abaixo:
        - Acesse a pasta documentation
        - Executar **[npm start]**
        - Depois acessar **http://localhost:5050/docs/**


---

#### Boa sorte!

**[Teamsoft](https://teamsoft.com.br)**