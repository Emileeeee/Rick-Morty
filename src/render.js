import openModalBlockPerson from "./modal.js";
import { AddFavorite } from "./favorite.js";
import { removeFavorite } from "./favorite.js";
import { CurrentNumber } from "./index.js";
import {favorites} from "./favorite.js"
let Navbtn = document.querySelector('.Navbtn')
let btnSeeFavorite = document.querySelector('.btnSeeFavorite')
// const btnOpenFavorite = document.getElementById("btnSeeFavorite");

export function APIfunction() {
  const url = new URL(
    `https://rickandmortyapi.com/api/character/?page=${CurrentNumber}`
  );
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.slice(0, 20).forEach((person) => {
        createElementPerson(person);
        console.log(favorites);
      });

      console.log(data.results, "data.results");
    });
}

export function textContentBtnSeeFavorite() {
  if(favorites.length>0){
    btnSeeFavorite.textContent =`Добавлено в избранные ${favorites.length}`
  } else {
    btnSeeFavorite.textContent =`Добавлено в избранные 0`
  }
  

  Navbtn.appendChild(btnSeeFavorite)
}
function createElementPerson(person) {
  const allBlockContent = document.getElementById("allBlockContent");
  
  let BlockContent = document.createElement("div");
  BlockContent.className = "BlockContent";
  BlockContent.id = person.id;
  BlockContent.style.border = favorites.find((favorite) => favorite.id === person.id) ? "3px solid red" : "1px solid black";


  const imgPerson = document.createElement("img");
  imgPerson.className = "imgPerson";
  imgPerson.src = person.image;

  const namePerson = document.createElement("p");
  namePerson.textContent = person.name;
  namePerson.className = "NamePerson";
  namePerson.addEventListener("click", (event) => {
    openModalBlockPerson(person);
  });

  const statusPerson = document.createElement("p");
  statusPerson.textContent = person.status;
  statusPerson.className = "statusPerson";

  const containerFavoritePerson = document.createElement("div");
  containerFavoritePerson.className = "containerFavoritePerson";

  let FavoritePerson = document.createElement("span");
  FavoritePerson.id = "FavoritePerson";
  FavoritePerson.innerHTML = `&#x1f90d`;
  FavoritePerson.className = "FavoritePerson";
  FavoritePerson.addEventListener("click", (e) => {
    AddFavorite(person, BlockContent);

  });
  FavoritePerson.addEventListener("dblclick", (e) => {
    removeFavorite(person, BlockContent);
  });

  allBlockContent.appendChild(BlockContent);

  BlockContent.appendChild(imgPerson);
  BlockContent.appendChild(namePerson);
  BlockContent.appendChild(statusPerson);
  BlockContent.appendChild(containerFavoritePerson);
  containerFavoritePerson.appendChild(FavoritePerson);
}
