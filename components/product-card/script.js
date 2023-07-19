/* --------------------------- agregar a favoritos -------------------------- */
const fav_icon = document.querySelector('#fav-icon');
const fav_i = document.querySelector('#fav-i');

fav_icon.addEventListener('click',() => {
  addFav(fav_i);
});

const addFav = (fav_i) => {
  if (fav_i.classList.contains('fa-solid')) {
    fav_i.classList.remove('fa-solid');
    fav_i.classList.add('fa-regular');
  } else {
    fav_i.classList.remove('fa-regular');
    fav_i.classList.add('fa-solid');
  }
};
  


