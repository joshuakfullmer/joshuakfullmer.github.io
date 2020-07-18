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
            let image = document.createElement('img');
            let divs = document.createElement('div');
            let imgdiv = document.createElement('div');

            h2.textContent = rentals[i].name;

            divs.appendChild(h2);

            card.appendChild(divs);

            image.setAttribute('src', 'images/' + rentals[i].photo);
            image.setAttribute('alt', rentals[i].name);
            imgdiv.appendChild(image);
            
            card.appendChild(imgdiv);
            document.querySelector('div.cards').appendChild(card);

            document.getElementById(`ren${i + 1}`).textContent = rentals[i].name;
            document.getElementById(`rhd${i + 1}`).textContent = rentals[i].rhd;
            document.getElementById(`rfd${i + 1}`).textContent = rentals[i].rfd;
            document.getElementById(`whd${i + 1}`).textContent = rentals[i].whd;
            document.getElementById(`wfd${i + 1}`).textContent = rentals[i].wfd;
            

            // document.querySelector('div.cards').appendChild(divs);
        }
        // const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        // const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // let i = 0;
        // fivedayforecast.forEach(forecast => {
        //     let day = new Date(forecast.dt_txt);
        //     document.getElementById(`ren${i + 1}`).textContent = forecast.main.temp;
        //     document.getElementById(`day${i + 1}`).textContent = weekday[day.getDay()];
        //     document.getElementById(`icon${i + 1}`).src = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        //     document.getElementById(`icon${i + 1}`).alt = forecast.weather[0].main + ' icon';
        //     i++;
        // });
    });
