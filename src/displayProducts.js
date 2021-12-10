import { formatPrice } from './utils.js'
import { addToCart } from './cart/setupCart.js'

const display = (products, element) => {
  // display products
  element.innerHTML = products.map((product) => {
    const {name, id, image, price} = product
    return `<article class="product">
    <div class="product-container">
      <img src="${image}" class="product-img img" alt="${name}">

      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon"><i class="fas fa-search"></i></a>
        <button class="product-cart-btn product-icon" data-id="${id}"><i class="fas fa-shopping-cart"></i></button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`
  }).join('')
  element.addEventListener('click', function (e) {
    // when clicking the icon, it returns the icon, not the button
    const parent = e.target.parentElement // parentEl is the button
    if (parent.classList.contains('product-cart-btn')) {
      addToCart(parent.dataset.id)
    }
  })
}

export default display
