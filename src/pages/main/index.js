import React, {Component} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

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
                        <Link to={`/products/${product._id}`}>Acessar </Link>
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