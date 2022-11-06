// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText
  const quantity = product.querySelector(".quantity input").value
  const subTotal = product.querySelector(".subtotal span")
  const subTotalCount = price * quantity

  subTotal.innerText = subTotalCount

  return subTotalCount
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span')
  let totalCount = 0

  products.forEach(product => totalCount += updateSubtotal(product))
  total.innerText = totalCount
}

// ITERATION 4

function removeProduct(event) {
  const removeProduct = event.path[2]
  removeProduct.remove()
}

function clickRemoveProduct() {
  const actionListener = document.querySelectorAll(".action")

  actionListener.forEach(action => {
    action.addEventListener('click', (event) => {
      removeProduct(event)
    });
  })
}
// ITERATION 5

function createProduct() {
  const createProduct = document.querySelector("#cart tbody")
  const productName = document.querySelectorAll(".create-product input")[0]
  const unitPrice = document.querySelectorAll(".create-product input")[1]

  createProduct.insertAdjacentHTML('beforeend', `<tr class="product"><td class= "name"><span>${productName.value}</span></td><td class="price">$<span>${unitPrice.value}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td></tr>`)

  productName.value = ""
  unitPrice.value = ""
}
const createButton = document.querySelector("#create")

createButton.addEventListener('click', () => {
  createProduct()
  clickRemoveProduct()
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  clickRemoveProduct()
});
