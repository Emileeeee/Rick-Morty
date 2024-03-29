
export let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let btnOpenFavorite = document.getElementById("btnSeeFavorite");

export function AddFavorite(person, BlockContent) {
  const index = favorites.findIndex((favorite) => favorite.id === person.id);
  if (index == -1) {
    favorites.push(person);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(`${person.name} добавлен в избранное.`);
      btnOpenFavorite.textContent =`Добавлено в избранные ${favorites.length}`
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
