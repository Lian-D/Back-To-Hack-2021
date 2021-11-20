import './App.css';
import React  from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Polyline} from "react-google-maps";

//const WrappedMap = withScriptjs(withGoogleMap((props) => (<GoogleMap defaultZoom={10} defaultCenter={{lat: 43, lng: -79}}/>)));
const pathCoordinates = [
    { lat: 49, lng: -123 },
    { lat: 52, lng: -125}
];
function Map(){
    return (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 49, lng: -123}}
        ><Polyline
            path={pathCoordinates}
            options={{
                strokeColor: '#00ffff',
                strokeOpacity: 1,
                strokeWeight: 2,
                icons: [{
                    icon: "hello",
                    offset: '0',
                    repeat: '10px'
                }],
            }}
        /></GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {

    return (
        <div>
            <div>
                Origin: <input type="text" />
                Destination: <input type="text"/>
                Within Time: <input type="text"/>
                <button>Search</button>
            </div>

        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap
                googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=${key_here}&v=3.exp&libraries=geometry,drawing,places'
                loadingElement= {<div style={{height: "100%"}} />}
                containerElement = {<div style={{height: "100%"}} />}
                mapElement = {<div style={{height: "100%"}} />}
            />
        </div>
        </ div>

    )

}