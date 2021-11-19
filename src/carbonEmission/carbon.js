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


class Carbon {
    constructor(){
        this.carbon = 0;
    }

    getCarbonFootPrint(drivingType, distance){
        switch (drivingType) {
            case driving:
                return drivingPerKm*distance;
                break;
            case transit:
                return transitPerKm*distance;
            case walk:
                return walkPerKm*distance;
            case cycle:
                return cyclePerKm*distance;
        }
    }
}

