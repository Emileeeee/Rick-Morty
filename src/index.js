require('./style.css');
const nextPage = document.getElementById("nextPage");
// import {SeeFavorite} from './favorite.js'
import {APIfunction} from './render.js'
import {textContentBtnSeeFavorite} from './render.js'
export let CurrentNumber = 1
textContentBtnSeeFavorite()
APIfunction()

// btnOpenFavorite.addEventListener('click', e => {
//     SeeFavorite()
// })
if(CurrentNumber<42) {
    nextPage.addEventListener('click', e => {
        CurrentNumber++ 
        APIfunction()
      })
}else{
    alert("Все!!! капут, приехали, это конец")
}
