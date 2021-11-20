import './App.css';
import React  from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


const WrappedMap = withScriptjs(withGoogleMap((props) => (<GoogleMap defaultZoom={10} defaultCenter={{lat: 43, lng: -79}}/>)));

export default function App() {

    return (
        <div>
            Origin: <input type="text" />
            Destination: <input type="text"/>
            Within Time: <input type="text"/>
            <button>Search</button>
            <div style={{width: '100vw', height: '100vh'}}>
                <WrappedMap
                            googleMapURL = {`https://www.google.com/maps/@?api=AIzaSyA3q-IyhJlUky394iydh9f-z3Wid9UI-Go&map_action=map`}
                            loadingElement= {<div style={{height: "100%"}} />}
                            containerElement = {<div style={{height: "100%"}} />}
                            mapElement = {<div style={{height: "100%"}} />}
                />
            </div>

        </div>
    )
}



