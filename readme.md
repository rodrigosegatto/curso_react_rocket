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

## Buscando produtos da API

##### Adicionar axios
O axios é um cliende que facilita a utilização de Promises para requisição via HTTP
Rodar o comando no terminal. 

    yarn add axios

##### Serviços para API externa
Criar uma pasta chamada **services** em './src'.
Separar arquivos com serviços que darão acesso a APIs

Criar um arquivo chamado **api.js** em './src/services'

##### Conteúdo arquivo api.js
Arquivo final ficará assim:

```js
    import axios from 'axios';

    const api = axios.create({baseURL: 'http://localhost:3001/api/'});

    export default api;
```

Substituir o baseUrl pelo endereço da ApI desejada

##### Pages
Separar as paginas da aplicação (Listagem, detalhe, etc...). Organização.

Criar uma pasta **pages** em './src', dentro dela uma nova pasta **main** e o arquivo **index.js** dentro da mesma. './src/pages/main/index.js'

##### Ajustar arquivo index.js da main
Dentro do arquivo **./src/pages/main/index.js** inserir o seguinte código

```js
    import React, {Component} from 'react';
    import api from '../../services/api';

    export default class Main extends Component {
        
        //Executar uma ação imediata sempre que o componente for exibido em tela.
        //Para isto, sempre usar componentDidMount
        componentDidMount(){
            this.loadProducts();
        }

        //Faz uma requisição e busca os produtos na API
        loadProducts = async () => {
            const response = await api.get('/products');
            console.log(response.data);
        }
        
        render(){
            return <h1>Teste</h1>
        }
    }
```

##### Importar o Main dentro do App
Agora é preciso importar a Main dentro do **./src/App.js**, o arquvio principal da aplicação.
Comando nas primeiras linhas:

```js  
    import Main from './pages/main';
```

Ajustar a const App para também renderizar a Main. Incluir após o Header a tag 

    <Main /> 

Ficando:

```js
    const App = () => (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
```
## Armazenando no estado
Basicamente no react temos o conceito chamado Estado.
Cria-se um objeto "state" para armazenar variaveis. Em nosso caso, armazenar os produtos.
Sempre que alguma variavel do estado alterar, o render() executa novamente atualizando os valores em tela.

O código de **./src/pages/main/index.js** agora ficará como abaixo

```js
    import React, {Component} from 'react';
    import api from '../../services/api';

    export default class Main extends Component {
        
        //Armazena objeto produtos no estado
        state = {
            products: []
        };
        
        //Executar uma ação imediata sempre que o componente for exibido em tela.
        //Para isto, sempre usar componentDidMount
        componentDidMount(){
            this.loadProducts();
        }

        //Faz uma requisição para a API buscando produtos
        loadProducts = async () => {
            const response = await api.get('/products');

            //SetState é padrão do React para mandar um valor ao state
            this.setState({products: response.data.docs});
        }
        
        //sempre o ultimo, executa tudo e depois o render() automaticamente mostrando em tela
        render(){
            const {products} = this.state;
            
            return (
                <div className="product-list"> 
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <a href="">Acessar</a>
                        </article>
                    ))}
                </div>
            );
        }
    }
```


## Listando produtos
Agora iremos ajustar a interface de listagem de produtos com todas as informações que temos

Criar arquivo **styles.css** em './src/pages/main/'

Arquivo de estilos ficará com o conteúdo abaixo:

```css
    .product-list{
        max-width: 700px;
        margin: 20px auto 0;
        padding: 0 20px;
    }

    .product-list article {
        background: #FFF;
        border: 1px solid #DDD;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .product-list p {
        font-size: 16px;
        color: #999;
        margin-top: 5px;
        line-height: 24px;
    }

    .product-list article a{ 
        height: 42px;
        border-radius: 5px;
        border: 2px solid #da552f;
        background: none;
        margin-top: 10px;
        color: #da552f;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }

    .product-list article a:hover{
        background: #da552f;
        color: #fff;
    }
```

##### Importar styles
Dentro do arquivo **index.js** de './src/pages/main/, importar os styles.
Nas primeiras linhas inserir:

```js
    import './styles.css';
```

## Páginas Anterior/Próximo