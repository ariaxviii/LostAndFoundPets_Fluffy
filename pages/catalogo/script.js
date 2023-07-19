const productos=[
  { id:1,
    img:"../../img/products/3hulls.svg",
    nombre: "Hills - Science Diet Puppy Small Paws Dog ",
    Descripcion:"Perro Cachorro Talla Mediana",
    precio:42.356,
},
  {   id:2,
      img:"../../img/products/2max.svg",
      nombre: "Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo",
      Descripcion:"Cachorro",
      precio:50.205,
      
  },
  {   id:3,
      img:"../../img/products/4-royal cannin.svg",
      nombre: "Royal Canin ",
      Descripcion:"Bull Dog Adulto",
      precio:88.704,
  },
  {   id:4,
      img: "../../img/products/5-nutrecan.svg",
      nombre: "Nutrecan - Alimentos Perros Campo  ",
      Descripcion:"Alimentos Perros Campo",
      precio:62.916,
  },
  {   id:5,
      img:"../../img/products/6-agilite-gold.svg",
      nombre: "Agility Dog - Grandes Adultos ",
      Descripcion:"Alimento Perro Cachorro",
      precio:50.185,
  },
  {   id:6,
      img:"../../img/products/7-dogchow.svg",
      nombre: "Dog Chow - Salud Visible Adultos Minis y Pequeños ",
      Descripcion:"Perro Cachorro Talla Mediana",
      precio:42.356,
  },
  {   id:7,
      img:"../../img/products/8guaAmor15.svg",
      nombre: " Guaumor - Adultos Razas Medianas Y Grandes",
      Descripcion:" Razas Pequeñas",
      precio: 50.156,
  },
  {
      id:8,
      img:"../../img/products/9-nutrique.svg",
      nombre: "Nutrique - Perro Cachorro Talla Mediana",
      Descripcion:"Salud Visible Adultos",
      precio:105.655,
  },
  {   id:9,
      img:"../../img/products/1-pedigree.svg",
      nombre: "Max Vita - Alimento Perro Cachorro Crecimiento Saludable Pollo  ",
      Descripcion:"Science Diet Puppy Small Paws ",
      precio:88.749,
},


];
console.log(productos);

let container_product_card = document.querySelector('.container_product-card');

const render_products = (arrProducts) => {
 
  let i = 0
  container_product_card.innerHTML = '';
  
  arrProducts.forEach(product => {
    let card_product = document.createElement('div')
    card_product.classList.add('card-product')
    card_product.innerHTML = `

    
    <img class='card-product__img' src="${product.img}" alt="">
 
  <div class="card-product__content-txt">
    <div class='card-product__text-main'>
      <p class='card-product__title'>${product.nombre}</p>
      <p class='card-product__stars'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </p>
    </div>

    <div class='card-product__footer'>
      <div class='card-product__total'>
        <p> $ ${product.precio}</p>
      </div>

      <div class='card-product__btn-cont'>
        <p onclick='add_to_car(${product.id})' class='card-product__btn-add-shopping'>
          <i class="fa-solid fa-bag-shopping"></i>
        </p>
        <p id='fav-icon${i}' class='card-product__btn-add-fav'>
          <i id='fav-i${i}' class="fa-regular fa-heart"></i>
          <!--Corazon ative  <i class="fa-solid fa-heart"></i> -->
        </p>
      </div>
    </div>
  </div>
</div>
    
    
    `
    
    ++i
  container_product_card.append(card_product)

  })

}
render_products(productos)



/* --------------------------- carrito de compras --------------------------- */

function existObjetoConID(array, id) {
  const objetosConID = array.filter(objeto => objeto.id == id);
  return objetosConID.length > 0;
}


let shopping_car = []


/* ------------------ //Agregar item al carrito de compras ------------------ */
const add_to_car = (id) => {
  let product = productos.find(product => product.id == id)

  if (existObjetoConID(shopping_car, product.id)) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Este producto ya existe',
      showConfirmButton: false,
      timer: 1500
    })
  
  } else {
    shopping_car.push(product)
    console.log("Objeto agregado correctamente");
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    
  }
  render_shopping_car()
}

/* -------------- // renderizar la lista del carrito de compras ------------- */

const container_carrito = document.querySelector('.shopping_cart__list');

const render_shopping_car = () => {
  console.log(shopping_car);
  let shopping_card = ''
  let i = 0;

  shopping_car.forEach(product => {
    
    
    shopping_card += `
    <div id="${i}" class='shopping_cart__item'>
          <div class='shopping_cart__img'>
          <img src="${product.img}" alt="">
          <p>${product.nombre}</p>
          <p class='shopping_cart_delete'><i class="fa-solid fa-trash-can"></i></i></p>
        </div>
          <div class='shopping_cart__price'>
          <p>valor: $ ${product.precio}</p>
          </div>
      </div>
    
    `
  })
  ++i
  container_carrito.innerHTML = shopping_card;

  render_shopping_car_total(shopping_car)
  add_event_btn_delete()
  
}
/* ------------------- numero del productos en el carrito ------------------ */

const numeroCarrito = document.querySelector('.count-product');
const actualizarNumeroCarrito = (carrito) => {
  let num = carrito.length;
  numeroCarrito.textContent = num;
}


/* ------------------------------- suma total ------------------------------- */
const sum_total_car = (arrayObjetos) => {
  let total = 0;
  arrayObjetos.forEach(element => {
    total += element.precio;
  })
  return total
}

const render_shopping_car_total = (arr) => {
  const total_txt = document.querySelector('.shopping_car__total-text');
  total_txt.textContent = `${sum_total_car(arr).toFixed(2)}`
}


/* --------------------- Eliminar del carrito de compras -------------------- */


function add_event_btn_delete() {
  let btn_delete = document.querySelectorAll('.shopping_cart_delete');
  btn_delete.forEach((btn) => {
    btn.addEventListener('click', delete_shopping_car);
  });
}
  
function delete_shopping_car(e) {
  const id_btn = e.currentTarget.id;
  shopping_car.splice(id_btn, 1);

  render_shopping_car_total(shopping_car)
  render_shopping_car()

  
}


/* ---------------------------------- barra --------------------------------- */
const searchInput = document.querySelector('#search-input');
const suggestionsList = document.getElementById('suggestions-list');

// Evento de entrada en el campo de búsqueda
searchInput.addEventListener('input', function() {
  const inputValue = this.value.toLowerCase();
  const filteredProducts = productos.filter(producto => producto.nombre.toLowerCase().includes(inputValue));
  render_products(filteredProducts)
  console.log(filteredProducts);

  // Limpiar la lista de sugerencias
  suggestionsList.innerHTML = '';

  // Mostrar las sugerencias de autocompletado
  filteredProducts.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.textContent = producto.titulo;
    suggestionsList.appendChild(listItem);
  });

  // Mostrar/ocultar la lista de sugerencias según corresponda
  if (inputValue === '') {
    suggestionsList.style.display = 'none';
  } else {
    suggestionsList.style.display = 'none';
  }
});



// Evento de clic en una sugerencia
suggestionsList.addEventListener('click', function(event) {
  if (event.target.tagName === 'li') {
    const selectedProductTitle = event.target.textContent;
    searchInput.value = selectedProductTitle;
    suggestionsList.style.display = 'none';
  }
});



  




  