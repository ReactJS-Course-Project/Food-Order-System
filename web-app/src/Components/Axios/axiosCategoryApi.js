import axios from 'axios';

const CategoriesApi = axios.create({
  baseURL: 'http://localhost:4000/Categories'
});

export default CategoriesApi;
