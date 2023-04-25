import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ currentTime, setCurrentTime, src, length }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const myRef = React.createRef();
  const myInput = React.createRef();

  const onPlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
  };

  const onTimeUpdate = () => {
    setCurrentTime(myRef.current.currentTime);
    myInput.current.value = (currentTime * 100) / myRef.current.duration;
    if (Math.round(myRef.current.currentTime) >= length) {
      setIsPlaying(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const onSkipBehind = () => {
    myRef.current.currentTime -= 10;
    setCurrentTime(myRef.current.currentTime);
  };

  const onSkipForward = () => {
    myRef.current.currentTime += 10;
    setCurrentTime(myRef.current.currentTime);
  };

  const handleScrub = (e) => {
    const scrubTime = (e.target.value / 100) * myRef.current.duration;
    myRef.current.currentTime = scrubTime;
    setCurrentTime(scrubTime);
    myInput.current.value = (currentTime * 100) / myRef.current.duration;
  };

  return (
    <div className="AudioPlayer">
      <audio preload="metadata" ref={myRef} onTimeUpdate={onTimeUpdate}>
        <source src={src} type="audio/mpeg"></source>
      </audio>
      <div className="progress">
        <p>{formatTime(currentTime)}</p>
        <input
          ref={myInput}
          type="range"
          min={0}
          max={100}
          defaultValue="0"
          onChange={handleScrub}
        ></input>
        <p>{formatTime(length)}</p>
      </div>
      <div className="buttons">
        <button onClick={onSkipBehind}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button onClick={onPlayPause} className="play">
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={onSkipForward}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
