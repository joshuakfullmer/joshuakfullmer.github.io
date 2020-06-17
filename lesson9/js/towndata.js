const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;

            card.appendChild(h2);

            motto.textContent = towns[i].motto;

            card.appendChild(motto);

            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;

            card.appendChild(yearFounded);

            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;

            card.appendChild(currentPopulation);

            averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            card.appendChild(averageRainfall);

            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name + ' scenery');

            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });