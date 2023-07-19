const btn_close = document.querySelector('.fa-arrow-left');
const shopping_car1 = document.querySelector('.shopping_cart');
const header_btn_shopping_car = document.querySelector('.header_btn_shoppin-cart');

btn_close.addEventListener('click', () => {
  shopping_car1.classList.toggle('hidden')
  
});

header_btn_shopping_car.addEventListener('click', () => {
  shopping_car1.classList.toggle('hidden')
  
});