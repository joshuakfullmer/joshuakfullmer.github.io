const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jasonObject);
        for (let i = 0; i < towns.length; i++) {
            let card
        }
    });