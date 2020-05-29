
let windSpeed = 11;
let air = 40;
let windChill;
if (air <= 50 && air > 3) {
    windChill = 35.74 + .0215 * air - 35.75 * Math.pow(windSpeed, .16) + .4275 * air * Math.pow(windSpeed, .16);
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    windChill = Math.round(windChill * multiplier) / multiplier;
    windChill += "°F";
}
else {
    windChill = "N/A";
}


document.getElementById('windspeedspan').innerHTML = windSpeed;
document.getElementById('airspan').innerHTML = air;
document.getElementById('windchillspan').innerHTML = windChill;