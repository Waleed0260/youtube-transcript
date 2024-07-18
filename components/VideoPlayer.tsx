"use client"
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, getSeconds }: { videoId: string, getSeconds:any }) => {
  const [currentTime, setCurrentTime] = useState<Number>(0);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    const formattedHrs = hrs < 10 ? `0${hrs}` : hrs;
    const formattedMins = mins < 10 ? `0${mins}` : mins;
    const formattedSecs = secs < 10 ? `0${secs}` : secs;
  
    return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
  };
  
  const onPlayerStateChange = (event: any) => {
    const interval = setInterval(()=>{
      const player = event.target;
      const currentTime = player.getCurrentTime();
      setCurrentTime(currentTime);
      // console.log(formatTime(currentTime));
      getSeconds(formatTime(currentTime));
      // console.log(formatTime(currentTime))
    }, 1000); // update every second
    return ()=> clearInterval(interval)
  };

  return (
    <YouTube videoId={videoId} onStateChange={onPlayerStateChange} />
  );
};

export default VideoPlayer