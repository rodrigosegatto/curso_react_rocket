# Curso React - Rocketseat
Uma biblioteca JavaScript para criar interfaces de usuário. 
Com React podemos criar um frontende das aplicações de uma maneira mais simplex, seguindo padrões de programação.


## Criando Projeto

##### Instalar NodeJS
Acessar o site [https://nodejs.org/en/] e instalar o NodeJS

Verificar se está instalado através do comando abaixo no terminal.

    node -v

##### Instalar NPM
O npm deverá estar instalado também.
Verificar a versão com comando abaixo no terminal.

    npm -v

##### Instalar Yarn
Yarn é um gerenciador de pacotes. Utilizar o site [https://yarnpkg.com/] com os guias para fazer a instalação
É como se fosse um NPM, porém, mais rápido desenvolvido pelo Facebook.
Verificar a versão com comando abaixo no terminal.

    yarn -v

##### Instalar pacote do React Native
Comando abaixo no terminal para instalar React Nactive. Crie aplicativos nativos do React sem configuração de compilação.
comando é fornecido para compatibilidade com versões anteriores.

    npm install -g create-react-app

##### Criar projeto React
Comando abaixo criará nosso projeto React, o qual chamaremos de 'huntweb'.

    create-react-app huntweb

##### Iniciar App

    npm start

Deverá abrir o endereço do App no navegador web [http://localhost:3000]

## O que são componentes? 

##### remover arquivos desnecessarios
Acessar a pasta /src e remover os arquivos **App.css, index.css, App.test.js, logo.svg**

##### Ajuste arquivos
Dentro do arquivo **App.js** remover as linhas 

```js
    import logo from './logo.svg';
    import './App.css';
```
NO mesmo arquivo, remover tudo dentro da tag html abaixo
    
    <div className="App">

Ficará assim: 

```js
    import React from 'react';

    function App() {
    return (
        <div className="App">
        <h1>Hello Segatto</h1>
        </div>
    );
    }

    export default App;

```

Dentro do arquivo **index.js** remover as linhas 

```js
    import './index.css';
```
##### Entendendo melhor os componentes
O arquivo **index.js** que fica dentro de /src é o principal arquivo da aplicação.
Ele que será lido primeiro sempre que a aplicação rodar.

