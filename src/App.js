import { useState } from "react";
import Helmet from "react-helmet";
import "./App.css";
import AudioPlayer from "./AudioPlayer";
import Transcript from "./Transcript";
import img from "./Me.jpg";
import data from "./Data";

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [musicTime, setMusicTime] = useState(0);
import podCastPDF from "./Podcast.pdf";
  return (
    <div className="App">
      <Helmet>
        <title>{data.episodeName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./music-solid.svg" />
      </Helmet>
      <header>
        <div id="header">
          <div className="column" id="1">
            <h2>Storia della Musica</h2>
            <h3>Mattia Formichetti</h3>
          </div>
          <h1 className="column">{data.episodeName}</h1>
          <div className="column" id="img">
            <a
              href="https://github.com/IlChitarrista"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} alt="Mattia pic" />
            </a>
          </div>
        </div>
      </header>
      <AudioPlayer
        src={data.audio}
        length={data.audioLength}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <Transcript data={data.transcript} />
      <div className="comment">
        <h3>{data.comment.title}</h3>
        <AudioPlayer
          src={data.comment.music}
          length={data.comment.length}
          currentTime={musicTime}
          setCurrentTime={setMusicTime}
        />
        <p>{data.comment.text}</p>
        	{/* <object data="./Podcast.pdf" /> */}

				<object
					data={podCastPDF}
					type='application/pdf'
					width='100%'
					height='100%'
				>
					<p>
						I can't view the pdf - I'm including the link <a href={podCastPDF}>to the PDF!</a>
					</p>
				</object>
      </div>
    </div>
  );
}

export default App;
