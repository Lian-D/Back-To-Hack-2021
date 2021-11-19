let http = require('http');
const req = require('request');
let mapsQuery = {};

function createAPIrequestURL(origin, destination, transportMode) {
    let urlOrigin = encodeURIComponent(origin).replace('%20', '+');
    let urlDestination = encodeURIComponent(destination).replace('%20', '+');
    const creds = require('./mapsCred.json');
    console.log(creds.googleMapsKey);
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${urlOrigin}&destination=${urlDestination}&alternative=true&mode=${transportMode}&units=metric&key=${creds.googleMapsKey}`;
    return url;
}


mapsQuery.get = (origin, destination, timeframe) => {
    let res = [];
    let walkingUrl = createAPIrequestURL(origin, destination, "walking");
    let bikingUrl = createAPIrequestURL(origin, destination, "bicycling");
    let transitUrl = createAPIrequestURL(origin, destination, "transit");
    let drivingUrl = createAPIrequestURL(origin, destination, "driving");

    let APIReqArr = [];

    let walkingProm = new Promise( (resolve, reject) => {
        req(walkingUrl, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data.routes[0].overview_polyline);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })

    let bikingProm = new Promise( (resolve, reject) => {
        req(bikingUrl, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data.routes[0].overview_polyline);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })

    let transitProm = new Promise( (resolve, reject) => {
        req(transitUrl, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data.routes[0].overview_polyline);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })

    let drivingProm = new Promise( (resolve, reject) => {
        req(drivingUrl, (err, res, body) => {
            try {
                let data = JSON.parse(body);
                console.log(data.routes[0].overview_polyline);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    })

    return Promise.all([drivingProm, transitProm, bikingProm, walkingProm]).then((values => {
        console.log(values);
        return values;
    }))
}

mapsQuery.get("Lougheed Town Station","Metropolis at metrotown", 2);

module.export = mapsQuery;