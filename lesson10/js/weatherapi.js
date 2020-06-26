const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8d1e99c71142778033ed100013bf9069';
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8d1e99c71142778033ed100013bf9069';

// weather summary 
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current').textContent = jsObject.weather[0].main;
    document.getElementById('airspan').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeedspan').textContent = jsObject.wind.speed.toFixed(0);
  });
let windSpeed = document.getElementById('windspeedspan').textContent;
let air = document.getElementById('airspan').textContent;
let windChill;
if (air < 50 && windSpeed > 3) {
  windChill = 35.74 + .6215 * air - 35.75 * Math.pow(windSpeed, .16) + .4275 * air * Math.pow(windSpeed, .16);
  windChill = Math.round(windChill);
  windChill += "°F";
}
else {
  windChill = "N/A";
}
document.getElementById('windchillspan').innerHTML = windChill;

// five-day forecast 
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const fiveday = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
      let i = 0;
      fiveday.forEach(fiveDayForecast => {
        document.getElementById('temp${i}').innerHTML = '${main.temp.toFixed(0)}°F';
        document.getElementById('day${i}').innerHTML = weekday[(new Date(fiveDayForecast.dt_txt)).getDay()];
        document.getElementById('fi${i}').setAttribute('src', 'images/' + '$fiveDayForecast.weather[0].main' + '.png');
        document.getElementById('fi${i}').setAttribute('alt', '$fiveDayForecast.weather[0].main' + 'icon');
        i++;
      });
    });
