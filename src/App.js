import { useState } from "react";
import Helmet from "react-helmet";
import "./App.css";
import AudioPlayer from "./AudioPlayer";
import Transcript from "./Transcript";
import audio from "./N.mp3";
import img from "./Me.jpg";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="App">
      <Helmet>
        <title>Verdi e Wagner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <div id="header">
          <div className="column" id="1">
            <h2>Storia della Musica</h2>
            <h3>Mattia Formichetti</h3>
          </div>
          <h1 className="column">Verdi e Wagner</h1>
          <div className="column" id="img">
            <img src={img} />
          </div>
        </div>
      </header>
      <AudioPlayer
        src={audio}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Transcript />
    </div>
  );
}

export default App;
