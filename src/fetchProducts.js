import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch(error => console.log("ERROR", error))
  const data = await response.json()
  console.log(response);
  console.log(data);
  return response
};

export default fetchProducts;
