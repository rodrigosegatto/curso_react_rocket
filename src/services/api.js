import axios from 'axios';

//Criar API com uma URL base. Sempre que chamarmos, só iremos precisar passar os parâmetros após a URL base.
//Ex: /products/2.
const api = axios.create({baseURL: 'http://localhost:3001/api/'});

export default api;