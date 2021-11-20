
class routeResponseFactory {
    constructor(mapRoutes, carbon) {
        this.mapRoutes = mapRoutes;
        this.carbon = carbon;
    }

    createResponse() {
        let response = [];
        for (let i of this.mapRoutes) {
            let curr = {};
            curr.legend = i.routes[0].legs[0];
            curr.polyline = i.routes[0].overview_polyline;
            curr.type = i.type;
            curr.time = i.routes[0].legs[0].duration;
            curr.carbonImpact = this.carbon.getCarbonFootPrint(i.type, i.routes[0].legs[0].distance.value/1000)
            response.push(curr);
        }
        return response;
    }
}

module.exports = routeResponseFactory;