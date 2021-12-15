// import functions and grab DOM elements
import { getFood } from './fetch-utils.js';
import { renderFood } from './render-utils.js'; 
import { getFighter } from './fetch-utils.js';
import { renderFighter } from './render-utils.js';
import { getSport } from './fetch-utils.js';
import { renderSport } from './render-utils.js';
import { getAnime } from './fetch-utils.js';
import { renderAnime } from './render-utils.js';
// let state
const foodContainer = document.getElementById('food-list-container');
const fightContainer = document.getElementById('fight-list-container');
const sportContainer = document.getElementById('sport-list-container');
const animeContainer = document.getElementById('anime-list-container');
// set event listeners 
window.addEventListener('load', async() => {
    const foods = await getFood();
  
    for (let food of foods) {
        const foodEl = renderFood(food);
        foodContainer.append(foodEl);
    }
});


window.addEventListener('load', async() => {
    const fighters = await getFighter();

    for (let fighter of fighters) {
        const fightEl = renderFighter(fighter);
        fightContainer.append(fightEl);
    }
});
window.addEventListener('load', async() => {
    const sports = await getSport();

    for (let sport of sports) {
        const sportsEl = renderSport(sport);
        sportContainer.append(sportsEl);
    }
});
window.addEventListener('load', async() => {
    const anime = await getAnime();

    for (let animes of anime) {
        const animeEl = renderAnime(animes);
        animeContainer.append(animeEl);
    }
});
      // get user input
  // use user input to update state 
  // update DOM to reflect the new state