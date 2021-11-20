var express = require('express');
var router = express.Router();
const RouteResponseFactory = require('../src/util/routeResponseFactory.js');
const MapsQuery = require('../src/lib/mapsQuery.js');
const CarbonEmissions = require('../src/carbonEmission/carbon.js');

router.get('/', async function (req, res, next) {
    let origin = req.body.origin;
    let destination = req.body.destination;
    let timeLimit = req.body.timeLimit;
    let carbonEmissionsObj = new CarbonEmissions();
    let mapQueryObj = new MapsQuery();
    let mapQueryRet = await mapQueryObj.getQueryResults(origin, destination, timeLimit);
    // console.log(mapQueryRet);
    // carbonEmissionsObj.getCarbonFootPrint("walking", "5");
    let routeResponseFact = new RouteResponseFactory(mapQueryRet, carbonEmissionsObj);
    let response = routeResponseFact.createResponse();
    res.send(response);
});

module.exports = router;
