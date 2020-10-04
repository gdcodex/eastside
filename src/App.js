import React from 'react';
import './App.css';
import './fdai.css';
import Gav from './fav';
import Favv from './favv';
import State from './stateLearn';
import Navigation from './mnavigation';



function App() {

  const bandinfo = [
    {band:"Illenium", song:"Good things fall apart"},
    {band:"Coldplay", song:"Yellow"},
    {band:"Passenger", song:"Let her go"},
    {band:"Maroon 5", song:"Sugar"},
]
  

  return (
    <div className="app">
    <Navigation/>
    <header className="header">
      <Gav name="Illenium"/>
      <Gav name="Coldplay"/>
      <Gav name="Passenger"/>
      <Gav name="Marron 5" />
      </header>
      <Favv />
      <div className="trend-section">
      <h2 className="trend-head">Trending Now !</h2>
      {
        bandinfo.map(bandInfo=>(
          <State band={bandInfo.band} song={bandInfo.song}/>
        ))
     
      }
      </div>
    </div>
  );
}

export default App;
