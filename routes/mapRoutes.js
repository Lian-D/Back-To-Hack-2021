var express = require('express');
var router = express.Router();
const CarbonEmissions = require('../src/carbonEmission/carbon.js')
var MapsQuery = require('../src/lib/mapsQuery.js');

router.get('/', async function (req, res, next) {
    let origin = req.body.origin;
    let destination = req.body.destination;
    let timeLimit = req.body.timeLimit;
    let carbonEmissionsObj = new CarbonEmissions();
    let mapQueryObj = new MapsQuery();
    let mapQueryRet = await mapQueryObj.getQueryResults(origin, destination, timeLimit);
    console.log(mapQueryRet);
    carbonEmissionsObj.getCarbonFootPrint("walking", "5");
    res.send(mapQueryRet);
    // res.send('respond with a resource');
});

module.exports = router;
