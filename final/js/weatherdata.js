// weather summary 
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=8d1e99c71142778033ed100013bf9069';
const fivedayapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=8d1e99c71142778033ed100013bf9069'
// include at least the current temperature, current condition description, and humidity. 
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('current').textContent = jsObject.weather[0].main;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
    });
fetch(fivedayapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));        
        let i = 0;
        fivedayforecast.forEach(forecast => {
            if (i == 0 || i == 4) {
              let day = new Date(forecast.dt_txt);
              document.getElementById(`temp${i + 1}`).textContent = forecast.main.temp;
            }
            i++;
        });
    });
