let http = require('http');
const req = require('request');
const creds = require("./mapsCred.json");
let mapsQuery = {};

function createAPIrequestURL() {
    const creds = require('./mapsCred.json');
    console.log(creds.googleMapsKey);
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${creds.googleMapsKey}`;
    return url;
}


mapsQuery.get = (origin, destination, timeframe) => {
    let url = createAPIrequestURL();
    return new Promise( (resolve, reject) => {
        req(url, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })
}
mapsQuery.get("test","test", 2);

module.export = mapsQuery;