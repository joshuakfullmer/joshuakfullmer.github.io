
function chill () {
    let windSpeed = 70;
    let air = 3;
    let windChill;
    if (air >= 50 || air > 3) {
        windChill = 35.74 + .0215 * air - 35.75 * Math.pow(windSpeed, .16) + .4275 * air * Math.pow(windSpeed, .16);
    }
    else {
        windChill = "N/A";
    }
    document.getElementsByClassName('windspeedspan').innerHTML = windSpeed;
    document.getElementsByClassName('airspan').innerHTML = air;
    document.getElementsByClassName('windchillspan').innerHTML = windChill;
}