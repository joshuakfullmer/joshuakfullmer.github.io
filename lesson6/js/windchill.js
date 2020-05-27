
    let windSpeed = 70;
    let air = 3;
    if (air >= 50 || air > 3) {
        let windChill = 35.74 + .0215 * air - 35.75 * Math.pow(windSpeed, .16) + .4275 * air * Math.pow(windSpeed, .16);
    }
    else {
        let windChill = "N/A"
    }
    document.getElementById('windspeedspan').innerHTML = windSpeed;
    document.getElementById('airspan').innerHTML = air;
    document.getElementById('windchillspan').innerHTML = windChill;
