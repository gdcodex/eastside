import React from "react";
import soundfile from './Slut.mp3'

function App() {
   
    
  return (
    <div>
    
      <audio autoPlay={true} >
        <source src={soundfile} type="audio/mpeg" />
      </audio>
    </div>
  );
  }

export default App;
