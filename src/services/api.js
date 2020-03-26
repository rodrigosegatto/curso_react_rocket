import axios from 'axios';

//Criar API com uma URL base. Sempre que chamarmos, só iremos precisar passar os parâmetros após a URL base.
//Ex: /products/2.
//Esta api localhost que iremos chamar estava em minha máquina (backend) e chama um banco de dados 
//direto no atlas.mongodb.com com minha conta designjoomla2012...
//Para testes, talvez retornar um JSON direto através de um objeto aqui
const api = axios.create({baseURL: 'http://localhost:3001/api/'});

export default api;