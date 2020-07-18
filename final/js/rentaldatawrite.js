const rentalurl = "https://joshuakfullmer.github.io/final/data/rentaldata.json";
fetch(rentalurl)
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
            let p = document.createElement('p');
            let image = document.createElement('img');
            let divs = document.createElement('div');
            let imgdiv = document.createElement('div');
            let single = false;
            if (i == 0) {
                single = true;
            }

            h2.textContent = rentals[i].name;
            if (single) {
                p.textContent = 'Seats ' + rentals[i].persons + ' person.';
            } 
            else {
                p.textContent = 'Seats up to ' + rentals[i].persons + ' people.';
            }
            
            card.appendChild(h2);
            card.appendChild(p);

            image.setAttribute('src', 'images/' + rentals[i].photo);
            image.setAttribute('alt', rentals[i].name);
            image.setAttribute('class', 'cardpic');
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);

            document.getElementById(`ren${i + 1}`).textContent = rentals[i].name;
            document.getElementById(`rhd${i + 1}`).textContent = "$" + rentals[i].rhd;
            document.getElementById(`rfd${i + 1}`).textContent = "$" + rentals[i].rfd;
            document.getElementById(`whd${i + 1}`).textContent = "$" + rentals[i].whd;
            document.getElementById(`wfd${i + 1}`).textContent = "$" + rentals[i].wfd;
            }
    });
