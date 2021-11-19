import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import DropDownList from './DropDownList.js';

function App() {
  return (
      <div>
        Your Location: <input type="text" ></input>
        Go to: <input type="text"></input>
          Within Time: <input type="text"></input>
          <button>Search</button>

      </div>
  )
}

export default App;
