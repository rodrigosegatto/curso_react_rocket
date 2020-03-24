import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

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