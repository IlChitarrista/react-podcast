import "./App.css";
import AudioPlayer from "./AudioPlayer";

function App() {
  return (
    <div className="App">
      <header>
        <AudioPlayer src="./N.mp3" />
      </header>
    </div>
  );
}

export default App;
