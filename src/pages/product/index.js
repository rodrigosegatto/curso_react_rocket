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