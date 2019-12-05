import axios from 'axios';

const SellerApi = axios.create({
  baseURL: 'http://localhost:4000/Sellers'
});

export default SellerApi;
