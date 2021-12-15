import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const setupCompanies = (store) => {
  // new Set automatically returns unique values
  let companies = new Set(store.map((product) => {
    return product.company
  }))
  companies = ['all', ...companies] // convert to array, add the all
  
  const companiesDOM = getElement('.companies')
  companiesDOM.innerHTML = companies.map((company) => {
    return `<button class="company-btn">${company}</button>`
  }).join('')

  companiesDOM.addEventListener('click', (e) => {
    const element = e.target
    if (element.classList.contains('company-btn')) {
      let newStore = []
      if (element.textContent === 'all') {
        newStore = [...store]
      }
      else {
        newStore = store.filter((product) => {
          return product.company === e.target.textContent
        })
      }
      display(newStore, getElement('.products-container'))
    }
  })
}

export default setupCompanies
