const productoContent= document.getElementById("productoContent");
const verCarrito_Compra= document.getElementById("verCarrito_Compra");
const modalContainer= document.getElementById("modalContainer");
const myordercontainer=document.querySelector('.my-order-container');
const myorder=document.querySelector('#my-order');
const totalconten = document.querySelector('#my-order-content');
const tablaTbody=document.querySelector('.table');

let carritoCompras=[]
// se estan llamando los metodos de la lista de objetos que esta en js productos.
productos.forEach((produc)=>{
    let content = document.createElement("div");
    content.className="produc-card"
    content.innerHTML=`
    <img class="img-producto" src="${produc.img}">
    <h4 class="produc-nombre">${produc.nombre}</h4>
    <p class="produc-Descripcion">${produc.Descripcion}</p>
    <h6 class="produc-precio">${produc.precio}</h6>
    `;
    productoContent.append(content);

    let comprar = document.createElement("button")
    comprar.className ="boton-comprar"
    comprar.innerText="comprar";

    content.append(comprar);
    // se asigna un evento al boton compraR 
    comprar.addEventListener("click",()=>{
        carritoCompras.push({
            id : produc.id,
            img: produc.img,
            nombre: produc.nombre,
            Descripcion: produc.Descripcion,
            precio: produc.precio,
        });
    });

    
});

verCarrito_Compra.addEventListener("click",()=>{
    const modalHeder = document.createElement("div");
    modalHeder.className="modalHeder";
    /*modalHeder.innerHTML=`
    <h1 class=modalheder-title>Carrito.</h1>
    `*/;
    modalContainer.append(modalHeder);
 
    const modalbutton=document.createElement("h1");
    modalbutton.className="modalHederButon";

    modalHeder.append(modalbutton);
 
     carritoCompras.forEach((produc)=>{
     let carrito =document.createElement("div");
     carrito.className="modal-content";
     carrito.innerHTML=`
     <div class="shopping-cart">
              <div class="container-img">
                <figure>
                  <img src="${produc.img}" alt="" class="product">
                </figure>
                <p>${produc.nombre}</p>
              </div>
              <p>$ ${produc.precio} <img class="ico-close" src="/src/icons/icon_close.png" alt=""></p>
            </div>
     `;
     
     modalContainer.append(carrito);

  });


 const total= carritoCompras.reduce((acc,p) => acc + p.precio, 0);

 
   totalconten.innerHTML=`   
  <div class="order">
    <p> Total $${total}</p>
    </div>
  `;

     
 });
 verCarrito_Compra.addEventListener(("click"),()=>{
    myorder.classList.toggle("ocultar");
    
 })


