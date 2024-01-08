let input = document.getElementById('counter');
let price = document.getElementById('price');
let totalPrice = document.getElementById('total-price');

const myElement = document.getElementById('price');

input.addEventListener('change', e => {
  let element = myElement.childNodes[0];
  console.log(myElement.childNodes[0]);
  console.log(typeof myElement.childNodes[0]);
  console.log(typeof element.nodeValue);
  totalPrice.innerHTML = e.target.value * element.nodeValue;
});
