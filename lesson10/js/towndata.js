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
            let divs = document.createElement('div');
            let imgdiv = document.createElement('div');

            h2.textContent = towns[i].name;

            divs.appendChild(h2);

            motto.textContent = towns[i].motto;

            divs.appendChild(motto);

            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;

            divs.appendChild(yearFounded);

            currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;

            divs.appendChild(currentPopulation);

            averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

            divs.appendChild(averageRainfall);
            card.appendChild(divs);

            image.setAttribute('src', 'images/' + towns[i].photo);
            image.setAttribute('alt', towns[i].name + ' scenery');
            imgdiv.appendChild(image);
            
            card.appendChild(imgdiv);
            document.querySelector('div.cards').appendChild(card);

            // document.querySelector('div.cards').appendChild(divs);
        }
    });