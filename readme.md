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

##### Arquivo CSS
Editar o arquivo **styles.css** em './src/pages/main/' adicionando as seguintes linhas ao final

```css
    .product-list .actions {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .product-list .actions button {
        padding: 10px;
        border-radius: 5px;
        border: 0;
        background: #da552f;
        color: #ffF;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }

    .product-list .actions button[disabled] {
        opacity: 0.5;
        cursor: default;
    }

    .product-list .actions button:hover {
        opacity: 0.7;
    }
```

##### Arquivo Index da Main
Ajustar o arquivo **index.js** de './src/pages/main/ deixando como abaixo para apresentar os botões próximo e anterior e ter seu funcionamento correto

```js
    import React, {Component} from 'react';
    import api from '../../services/api';
    import './styles.css';

    export default class Main extends Component {
        
        //Armazena objeto produtos no estado
        state = {
            products: [],
            productInfo: {},
            page: 1 //Pagina inicial da aplicação
        };
        
        //Executar uma ação imediata sempre que o componente for exibido em tela.
        //Para isto, sempre usar componentDidMount
        componentDidMount(){
            this.loadProducts();
        }

        //Faz uma requisição para a API buscando produtos
        loadProducts = async (page = 1) => {
            const response = await api.get(`/products?page=${page}`);

            //docs redebe docs de response.data e o resto (...) em productInfo
            const {docs, ...productInfo} = response.data;

            //SetState é padrão do React para mandar um valor ao state
            this.setState({products: docs, productInfo, page});
        }
        
        //Próxima Pagina
        nextPage = () => {
            //Recebe page e productInfo do estado
            const {page, productInfo} = this.state;
            
            //Se página atual igual ao total de paginas não faz nada
            if(page === productInfo.pages) return;

            //Caso contrário, segue e acrescenta uma página
            const pageNumber = page + 1;

            this.loadProducts(pageNumber);
        }

        prevPage = () => {
            const {page, productInfo} = this.state;

            //Se a página igual a 1, não temos como voltar anterior
            if(page === 1) return;

            //Caso contrário, segue e diminui uma página
            const pageNumber = page -1;

            this.loadProducts(pageNumber);
        }

        //sempre o ultimo, executa tudo e depois o render() automaticamente mostrando em tela
        render(){
            const {products, page, productInfo} = this.state;

            return (
                <div className="product-list"> 
                    {products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <a href="">Acessar</a>
                        </article>
                    ))}
                    <div className="actions">
                        <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                        <button disabled={page===productInfo.pages} onClick={this.nextPage}>Proximo</button>
                    </div>
                </div>
            );
        }
    }
```

## Configurando Navegação

##### react-router-dom
Ajustar a aplicação para podermos acessar com uso de rotas

Instalar react-router-dom. Rodar no terminal: 

    yarn add react-router-dom

##### Criando pagina Produto
Antes de configurar as rotas, vamos criar a pagina de produtos que permitirá ver os produtos em detalhe. 
Em './src/pages' criar uma pasta **product** com arquivo **index.js** dentro.

Conteúdo:

```js 
    import React, {Component} from 'react';

    export default class Product extends Component {
        render(){
            return <h1>Hello Word</h1>
        }
    }
```

##### Arquivo de Rotas
Criar um arquivo chamado **routes.js** em './src'
Nele importar as paginas que terão rotas de acesso e configurar as rotas, para quais páginas irão encaminhar o usuário.

Conteúdo do arquivo:

```js
    import React from 'react';
    import {BrowserRouter, Switch, Route} from 'react-router-dom';
    import Main from './pages/main';
    import Product from './pages/product';

    const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/products/:id' component={Product} />
            </Switch>
        </BrowserRouter>
    );

    export default Routes;
```

##### Arquivo APP
Ajustar arquivo **App.js** em './src'.
Importar as rotas adicionando o comando abaixo na segunda linha: 

```js
    import Routes from './routes';
```

Dentro da constante App, substituir a tag
    
    <Main />

    por 

    <Routes />

##### Pronto.
Basta acessar http://endereco/products/1 que estará acessando nossa rota.

##### Ajustar Links

Nas primeiras linhas do arquivo **.src/pages/main/index.js** importar o componente Link de react-router-dom
Estaremos configurando o link de acesso aos produtos.

```js
    import {Link} from 'react-router-dom';
```

Substituir o trecho abaixo

    <a href="">Acessar</a>

por 

    <Link to={`/products/${product._id}`}>Acessar </Link>


## Navegando pro Detalhe

Iremos agora mostrar os dados do produto.

##### Ajustar pagina produto
Em './src/pages/product/index.js' substituir o conteúdo existente pelo seguinte conteúdo:

```js
    import React, {Component} from 'react';
    import api from '../../services/api';
    import './style.css';

    export default class Product extends Component {
    state = {
        product: {}
    };

    //Primeira coisa a ser carregada automaticamente quando entrarmos 
    async componentDidMount(){
        //Recebendo o ID que está no GET do navegador 
        const {id} = this.props.match.params;
        //Chama a API via GET passando o endereço
        const response = await api.get(`/products/${id}`);
        //Adiciona o retorno ao estado do produto para que possamos mostrar em tela
        this.setState({product: response.data});
    }
    
    render(){
        const {product} = this.state;

        return <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>URL: <a href={product.url}>{product.url}</a></p>
        </div>
    }
    }
```

##### Estilizando o Produto 
Criar o arquivo './src/pages/product/style.css' e inserir o seguinte conteúdo:

```css
    .product-info {
        max-width: 700px;
        margin: 20px auto 0;
        padding: 20px;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #ddd;
    }

    .product-info h1{
        font-size: 32px;
    }

    .product-info p {
        color: #666;
        line-height: 24px;
        margin-top: 5px;
    }

    .product-info p a { 
        color: #069;
    }
``` 

## Pronto
Finalizado, nosso app já está operando, acessando api e apresentando e tratando dados em tela.