# Refatorando código legado em projetos React

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Build Status](https://travis-ci.org/megatroom/refactoring-react-legacy-code.svg?branch=master)](https://travis-ci.org/megatroom/refactoring-react-legacy-code)

Este projeto é utilizado como fonte para uma série de artigos no Medium:

- [Parte I - Introdução, primeiros passos e teste de integração](https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-i-2214fd9ee04d)
- [Parte II - Refatoração, teste de unidade, testando e refatorando componentes](https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-ii-f3c1d898c11e)
- [Parte III - Projetos do mundo real](https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-iii-9b6bf4a1c98e)
- [Parte IV - Redux](https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-iv-2913d1251305)
- Parte V - Padrões, mitos e verdades

## Como executar o projeto

Primeiro inicie a API:

```
cd api
npm install
npm start
```

Em seguida o client:

```
cd client
npm install
npm start
```

Depois basta acessar a URL http://localhost:3000/

Você terá que cadastrar um usuário para logar no sistema. A API não usa banco de dados, tudo é salvo em memória.

## Fluxo

O fluxo é bem simples para ser didático:

![Flow](docs/flow.png)

## Telas

### Login:

![Login Page](docs/login-page.png)

### Cadastro de novo usuário:

![Register Page](docs/register-page.png)

### Página inicial:

![Home Page](docs/home-page.png)

### Pagamento:

![Payment Page](docs/payment-page.png)

### Sucesso do pagamento:

![Payment Success Page](docs/payment-success-page.png)
