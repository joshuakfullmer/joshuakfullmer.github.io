const rentaldata = "js/rentaldata";

fetch(rentaldata)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsonObject['rentals'];
        
        for (let i = 0; i < rentals.length; i++) {
            // const townlimits = ['Preston', 'Fish Haven', 'Soda Springs'];
            // if (!townlimits.includes(rentals[i].name)) {
            //     continue;
            // }
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');
            let divs = document.createElement('div');
            let imgdiv = document.createElement('div');

            h2.textContent = rentals[i].name;

            divs.appendChild(h2);

            yearFounded.textContent = 'Year Founded: ' + rentals[i].yearFounded;

            divs.appendChild(yearFounded);

            currentPopulation.textContent = 'Population: ' + rentals[i].currentPopulation;

            divs.appendChild(currentPopulation);

            averageRainfall.textContent = 'Annual Rain Fall: ' + rentals[i].averageRainfall;

            divs.appendChild(averageRainfall);
            card.appendChild(divs);

            image.setAttribute('src', 'images/' + rentals[i].photo);
            image.setAttribute('alt', rentals[i].name + ' scenery');
            imgdiv.appendChild(image);
            
            card.appendChild(imgdiv);
            document.querySelector('div.cards').appendChild(card);

            // document.querySelector('div.cards').appendChild(divs);
        }
    });