"use client"
import React from "react";


const YouTubePlayer = () => {
  return (
    <div className="w-[80vw] h-[80vh] rounded-2xl overflow-hidden">  
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/X38hhugtRLg" title="Asteroid (YC W25) - Catching AI Agents Mistakes in Production" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default YouTubePlayer;
