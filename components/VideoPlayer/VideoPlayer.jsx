"use client";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e)=> {
        if(e.target === player.current) {
            setPlayState(false);
        }
    }

  //video path
  let videosrc = "/video.mp4";

  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <ReactPlayer
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;