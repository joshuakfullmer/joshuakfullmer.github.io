const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=8d1e99c71142778033ed100013bf9069';
const apiPrac = '{"coord":{"lon":-111.88,"lat":42.1},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":70.39,"feels_like":69.66,"temp_min":69.01,"temp_max":72,"pressure":1021,"humidity":52},"visibility":16093,"wind":{"speed":2.39,"deg":289},"clouds":{"all":1},"dt":1593189511,"sys":{"type":1,"id":4701,"country":"US","sunrise":1593172400,"sunset":1593227249},"timezone":-21600,"id":5604473,"name":"Preston","cod":200}'
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
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=8d1e99c71142778033ed100013bf9069'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
      let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let fiveday = jsObject.list.filter(x =>.dt_txt.includes("18:00:00"));
      let i = 0;
      fiveday.foreach(fiveDayForecast => {
        document.getElementById('temp${i}').innerHTML = '${main.temp.toFixed(0)°F';
        document.getElementById('day${i}').innerHTML = weekday[(new Date(fiveDayForecast.dt_txt)).getDay()];
        document.getElementById('fi${i}').setAttribute('src', 'images/' + '$eachDay.weather[0].main');
        document.getElementById('fi${i}').setAttribute('alt', '$eachDay.weather[0].main' + 'icon');
        i++;
      });
    });
