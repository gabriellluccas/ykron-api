# Conversor de Moedas (API)

Este projeto é uma api RESTFULL simples 

# Requistos
 - É necessário ter o node/npm instalado e o mongoDB

# Instalação
 Primeiramente é necessário instalar os pacotes que iremos utilizar:
 
``` 
   $ npm install
```

Depois é necessário configurar as variáveis de ambiente no arquivo .env como no arquivo .env.example, existem duas variaveis de ambiente que é a porta e o uri do banco.

Finalmente exacutar o comando: 

```
   $ npm run dev
```
 
 Por fim pode consumir a api por default em http://localhost:3000.
 
# Endpoints
 Existem 7 endpoints que poderão ser consumidos:
  - GET /veiculos - busca todos os veiculos
  - GET /veiculos/find - busca veiculos de acordo com a query
  - GET /veiculos:id - busca um veiculos especifico 
  - POST /veiculos - cadastra  um veiculo
  - PUT /veiculos/:id - atualiza um veiculo
  - PATCH /veiculos/:id - atualiza parcialmente um veiculo
  - DELETE /veiculos/:id - deleta de um veiculo

# Estrutura
  A estrutura do codigo está dividida em 3 partes: modes, services e routes, além de outros componentes como a inicialização do express e das rotas.
  Internamente utiliza-se o babel para poder utilizar o ES6 e converter se precisar.

## Models
  São os models padrões do mongoose, inicializa todos os modelos que irão existir dentro do banco além de toda a manipulação pode ser feita através deles

## Services
  São os serviços externos que existem dentro da API são utilizados dentro das funções dos endpoints, neste caso só existe a comunicação com o banco feito pelo mongoose

## Routes
  São as estruturas que serão os endpoints, eles são passados para uma função dentro de src/router.js para gerar os endpoints