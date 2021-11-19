let http = require('http');
const req = require('request');
let mapsQuery = {};

function createAPIrequestURL() {
    const cred = require('./mapsCred.json');
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=${creds.googleMapsKey}`;
    return url;
}



mapsQuery.get = (origin, destination, timeframe) => {
    let url = createAPIrequestURL();
    return new Promise( (resolve, reject) => {
        req(url, (err, res, body) => {
            try {
                let data = json.parse(body);
                console.log(data);
                resolve(data);
            } catch (error) {
                reject;
            }
        })
    })
}
createAPIrequest();

module.export = mapsQuery;