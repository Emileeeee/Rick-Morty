// let favorites = [];
// const btnOpenFavorite = document.getElementById("btnSeeFavorite");

// export function AddFavorite(person) {
//   const index = favorites.findIndex((favorite) => favorite.id === person.id);
//   if (index == -1) {
//     favorites.push(person);
//     console.log(`${person.name} добавлен в избранное.`);
//   }
//   btnOpenFavorite.textContent = `Добавлено в избранные ${favorites.length}`;
// }
// export function removeFavorite(person) {
//   const index = favorites.findIndex((favorite) => favorite.id === person.id);
//   if (index !== -1) {
//     favorites.splice(index, 1);
//     console.log(`${person.name} удален из избранного.`);
//     btnOpenFavorite.textContent = `Добавлено в избранные ${favorites.length}`;
//   }
// }

// export function SeeAllFavoritePerson(favorites) {
//   let AllFavoriteBlock = document.getElementById("AllFavoriteBlock");

//   let modalFavoritePerson = document.createElement("div");
//   modalFavoritePerson.className = "modalFavoritePerson";
//   modalFavoritePerson.id = "myModal";

//   let modalContent = document.createElement("div");
//   modalContent.className = "modalContentFavoritePerson";

//   let closeBtn = document.createElement("span");
//   closeBtn.className = "closeBtnModalFavoritePerson";
//   closeBtn.innerHTML = "×";

//   const BlockContentFavoritePerson = document.createElement("div");
//   BlockContentFavoritePerson.className = "BlockContentFavoritePerson";
//   BlockContentFavoritePerson.id = favorites.id;

//   const imgPerson = document.createElement("img");
//   imgPerson.className = "imgPerson";
//   imgPerson.src = favorites.image;

//   const namePerson = document.createElement("p");
//   namePerson.textContent = favorites.name;
//   namePerson.className = "NamePerson";
//   // namePerson.addEventListener("click", (event) => {
//   //   openModalBlockPerson(favorites);
//   // });

//   const statusPerson = document.createElement("p");
//   statusPerson.textContent = favorites.status;
//   statusPerson.className = "statusPerson";

//   BlockContentFavoritePerson.appendChild(imgPerson);
//   BlockContentFavoritePerson.appendChild(namePerson);
//   BlockContentFavoritePerson.appendChild(statusPerson);

//   modalContent.appendChild(closeBtn);
//   modalContent.appendChild(BlockContentFavoritePerson)

//   modalFavoritePerson.appendChild(modalContent);
//   AllFavoriteBlock.appendChild(modalFavoritePerson);

//   closeBtn.onclick = function () {
//     modalFavoritePerson.style.display = "none";
//   };
//   console.log(favorites.name)
//   console.log(favorites);
// }

//пробный код

export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let btnOpenFavorite = document.getElementById("btnSeeFavorite");

export function AddFavorite(person, BlockContent) {
  const index = favorites.findIndex((favorite) => favorite.id === person.id);
  if (index == -1) {
    favorites.push(person);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(`${person.name} добавлен в избранное.`);
    // if( btnOpenFavorite){
      btnOpenFavorite.textContent =`Добавлено в избранные ${favorites.length}`
    // } 
    BlockContent.style.border = "3px solid red";
  }
}

export function removeFavorite(person, BlockContent) {
  const index = favorites.findIndex((favorite) => favorite.id === person.id);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(`${person.name} удален из избранного.`);
    btnOpenFavorite.textContent = `Добавлено в избранные ${favorites.length}`;
    BlockContent.style.border = "1px solid black";
  }
}
