let http = require('http');
const req = require('request');
const creds = require("./mapsCred.json");
let mapsQuery = {};

function createAPIrequestURL(origin, destination, transportMode) {
    let urlOrigin = encodeURIComponent(origin).replace('%20', '+');
    let urlDestination = encodeURIComponent(destination).replace('%20', '+');
    const creds = require('./mapsCred.json');
    console.log(creds.googleMapsKey);
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${urlOrigin}&destination=${urlDestination}&alternative=true&mode=${transportMode}&key=${creds.googleMapsKey}`;
    return url;
}


mapsQuery.get = (origin, destination, timeframe) => {
    let url = createAPIrequestURL(origin, destination, "Walking");
    return new Promise( (resolve, reject) => {
        req(url, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data.routes[0].overview_polyline);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })
}
mapsQuery.get("Lougheed Town Station","Metropolis at metrotown", 2);

module.export = mapsQuery;