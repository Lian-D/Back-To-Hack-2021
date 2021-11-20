/* carbon footprint
*  all measures are grams per kilometer, refer to https://ourworldindata.org/travel-carbon-footprint
*  drivingPerKm  is Medium car(petrol)
*  transitPerKm is Bus
*  Over short to medium distances, walking or cycling are nearly always the lowest carbon way to travel.
*  While not in the chart, the carbon footprint of cycling one kilometer is usually
*  in the range of 16 to 50 grams CO2eq per km depending on how efficiently you cycle and what you eat.
*  so we set walkPerKm and cyclePerKm as the average of the range*/


const drivingPerKm = 192;
const transitPerKm  = 105;
const walkPerKm = (16 + 50)/2;
const cyclePerKm = (16 + 50)/2;
let minTime = 0;
let minCarb = 0;

class Carbon {
    constructor(){
        this.carbon = 0;
    }

    getCarbonFootPrint(travelMode, distance){
        switch (travelMode) {
            case driving:
                return drivingPerKm*distance;
                break;
            case transit:
                return transitPerKm*distance;
            case walking:
                return walkPerKm*distance;
            case bicycling:
                return cyclePerKm*distance;
        }
    }

    getRecTransport(travelMode, dist, time, desired_time){
        minCarb = getCarbonFootPrint(travelMode[0], dist[0]);
        minTime = time[0];
        let recTravel = 'walking';

        for (let i = 1; i < travelMode.length; i++){
            let currCarb = getCarbonFootPrint(travelMode[i], dist[i]);
            if ( (time[i] <= minTime && currCarb < minCarb) ||
                (time[i] < desired_time && currCarb < minCarb)){
                minCarb = currCarb;
                recTravel = travelMode[i];
            }
        }

        return recTravel;
    }
}

module.exports = Carbon;

