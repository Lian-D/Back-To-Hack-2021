var express = require('express');
var router = express.Router();
const carbonEmissions = require('./src/carbonEmission/carbon.js')
const mapQuery = require('./src/lib/mapsQuery.js');

/* GET home page. */
router.get('/routes', async function (req, res, next) {
    let origin = req.body.origin;
    let destination = req.body.destination;
    let timeLimit = req.body.timeLimit;
    let carbonEmissionsObj = new carbonEmissions();
    let mapQueryObj = new mapQuery();
    let mapQueryRet = await mapQueryObj.getQueryResults(origin, destination, timeLimit);
    carbonEmissionsObj.getCarbonFootPrint("walking", "5");

});

module.exports = router;
