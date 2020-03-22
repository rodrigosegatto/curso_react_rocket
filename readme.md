# Curso ReactJS - Rocketseat
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
O curso eplicou de maneira complicada o que eram componentes, por isto, utilizar o link abaixo para saber mais:

    [https://pt-br.reactjs.org/docs/components-and-props.html]

## Criando Header
Primeiro componente para dar uma estilizada no App.

Criar uma pasta chamada **components** dentro de '/src'

Criar uma pasta dentro de components chamada **Helper**

    ./src/components/Header

Dentro de 'Helper', criar um arquivo chamado **index.js** com o conteúdo abaixo:

```js
    import React from 'react';

    //Podemos criar componentes dentro do React somente com funções.
    //Não é necessario fazer 'class Header extends Component'.......
    const Header = () => <header id="main-header">Segatto</header>;

    export default Header;
```

##### Importar Header no App
Adicionar linha abaixo dentro de **./src/App.js** logo no início do código, na segunda linha.

```js  
    import Header from './components/Header';
```

Fazer mais alguns ajustes no App renderizando o Header.
Arquivo final abaixo: 

```js
    import React from 'react';
    import Header from './components/Header';

    const App = () => (
        <div className="App">
            <Header />
        </div>
    );

    export default App;
```

##### Estilizar Header
Criar arquivo **style.css** dentro do './src/components/Header'

Conteúdo: 

```css
    header#main-header { 
        width: 100%;
        height: 60px;
        background: #da552f;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
```

Importar o css dentro do arquivo **index.js** em  './src/components/Header'.
Colocar a linha abaixo após a linha que importa o React

```js
    import './style.css';
```
##### Estilizar css geral
Criar arquivo **style.css** dentro de './src'

Conteúdo: 

```css
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{ 
        font-family: Arial, Helvetica, sans-serif;
        background: #fafafa;
        color: #333;
    }
```

Importar dentro d o arquivo **App.js** em './src'.
Utilizar a seguinte linha nas linhas do topo:

```js
    import './style.css';
```

