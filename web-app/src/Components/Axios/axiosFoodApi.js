import axios from 'axios';

const FoodApi = axios.create({
  baseURL: 'http://localhost:4000/Foods'
});

export default FoodApi;
