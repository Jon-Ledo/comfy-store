import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch(error => console.log("ERROR", error))
 if (response) {
   return response.json()
 }
  return response
};

export default fetchProducts;
