"use client"
import React, {useEffect, useState} from "react";
import Translations from "@/components/Translations";
import VideoPlayer from "@/components/VideoPlayer";
// import Image from "next/image";
import Transcripts from "@/components/Transcripts";

// let seconds:any;
export default function Home() {
  const[time, setTime] = useState<string>();
  // const getSeconds = (seconds:any)=>{
  //   setTime(seconds);
  //   console.log(time);
  // }
  useEffect(()=>{
    // console.log("time", time)
  }, [time])
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:m-[120px] lg:items-center m-[20px]">
      <div className="flex flex-col p-6 lg:w-[50%]">
    <Translations time={time}/>
    <Transcripts time={time}/>
      </div>
      <div className="lg:w-[50%]">
    <VideoPlayer videoId="ykG8dVplZ_g" getSeconds={setTime}/>
      </div>
    </div>
  );
}
