import React, { useEffect, useState } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const myRef = React.createRef();
  const myInput = React.createRef();

  useEffect(() => {
    setTimeout(() => {
      setDuration(myRef.current.duration);
    }, 100);
  }, []);

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
      <audio ref={myRef} onTimeUpdate={onTimeUpdate}>
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
        <p>{formatTime(duration)}</p>
      </div>
      <div className="buttons">
        <button onClick={onSkipBehind}>-10</button>
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={onSkipForward}>+10</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
