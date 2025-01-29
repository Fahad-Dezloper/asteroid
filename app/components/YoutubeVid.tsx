"use client"
import { Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";


const YouTubePlayer = () => {
  // const [cursor, setCursor] = useState(null);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  
  function values(x, y){
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorX(x - rect.left);
      setCursorY(y - rect.top);
    }
  }

  function togglePlayPause() {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  return ( 
      <div ref={containerRef} onMouseMove={(e) => values(e.clientX, e.clientY)} id="page2" className="w-full relative overflow-hidden z-[30]">
    <div id="video"  onClick={togglePlayPause} style={{
          top: cursorY + "px",
          left: cursorX + "px",
          transform: "translate(-50%, -50%)",
        }} className={`absolute z-[30] bg-white p-4 cursor-pointer rounded-full`}>{isPlaying ? <Pause size={50} /> : <Play size={50} />}</div> 
            <video ref={videoRef} className="w-full h-full" src="/Asteroid.mp4"></video>
        </div>
  );
};

export default YouTubePlayer;
