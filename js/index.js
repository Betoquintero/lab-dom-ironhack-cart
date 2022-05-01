// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
   const price = product.querySelector('.price span');
   priceNumber = price.innerHTML
   const quantity = product.querySelector('input').value;
   let productTotal = priceNumber * quantity;   
   const productSubtotal = product.querySelector('.subtotal span');
   productSubtotal.innerHTML = productTotal;
   return productTotal;
  
}

function calculateAll() {
  let total = 0 
  const quantities = document.getElementsByClassName('product');
 

  [...quantities].forEach((elem) => updateSubtotal(elem) );

  [...quantities].forEach((elem) => total +=  updateSubtotal (elem) );


  const totalSpan = document.getElementById('total');
  totalSpan.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
