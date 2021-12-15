export function renderFood(food) {
    const foodDiv = document.createElement('div');
    const pizzaEl = document.createElement('p');
    const burgerEl = document.createElement('p');
    const noodleEl = document.createElement('p');
    const candyEl = document.createElement('p');

    foodDiv.classList.add = ('different-food');

    pizzaEl.textContent = food.Pizza;
    pizzaEl.classList.add = 'Pizza';

    burgerEl.textContent = food.Burger;
    burgerEl.classList.add = 'Burger';

    noodleEl.textContent = food.Noodles;
    noodleEl.classList.add = 'Noodles';

    candyEl.textContent = food.Candy;
    candyEl.classList.add = 'Candy';

    foodDiv.append(pizzaEl, burgerEl, noodleEl, candyEl);

    return foodDiv;
}


export function renderFighter(fighter) {
    const fightDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const weightEl = document.createElement('p');
    const winsEl = document.createElement('p');

    fightDiv.classList.add = ('different-fighters');

    nameEl.textContent = fighter.Name;
    nameEl.classList.add = 'Name';

    ageEl.textContent = `${fighter.Age} Years old`;
    ageEl.classList.add = 'Age';

    weightEl.textContent = `Weighs ${fighter.Weight}`;
    weightEl.classList.add = 'Weight';

    winsEl.textContent = `Wins ${fighter.Wins}`;
    winsEl.classList.add = 'Wins';

    fightDiv.append(nameEl, ageEl, weightEl, winsEl);

    return fightDiv;
}

export function renderSport(sport) {
    const sportDiv = document.createElement('div');
    const sportEl = document.createElement('p');
    const playerEl = document.createElement('p');
    const equipmentEl = document.createElement('p');
    const proEl = document.createElement('p');

    sportDiv.classList.add = ('different-sport');

    sportEl.textContent = sport.Sport;
    sportEl.classList.add = 'sports';

    playerEl.textContent = `Amount of players:${sport.Players}`;
    playerEl.classList.add = 'Players';

    equipmentEl.textContent = `Type of Equipment: ${sport.Equipment}`;
    equipmentEl.classList.add = 'Equipment';

    proEl.textContent = `Professional Name: ${sport.Professional}`;
    proEl.classList.add = 'Professional';

    sportDiv.append(sportEl, playerEl, equipmentEl, proEl);

    return sportDiv;
}

export function renderAnime(animes) {
    const animeDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const watchEl = document.createElement('p');
    const rateEl = document.createElement('p');

    animeDiv.classList.add = ('different-anime');

    nameEl.textContent = `Name of Anime: ${animes.Name}`;
    nameEl.classList.add = 'Name';

    genreEl.textContent = `Genre: ${animes.Genre}`;
    genreEl.classList.add = 'Genre';

    watchEl.textContent = `Where to watch: ${animes.Watch}`;
    watchEl.classList.add = 'Watch';

    rateEl.textContent = `Rating out of 10: ${animes.Rate}`;
    rateEl.classList.add = 'Rate';

    animeDiv.append(nameEl, genreEl, watchEl, rateEl);

    return animeDiv;
}