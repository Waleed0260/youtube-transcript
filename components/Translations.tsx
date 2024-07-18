"use client"
import React, { useEffect, useState } from "react";

const Translations = (time:any) => {
  // const data = await getData();
  // console.log(data);
  // console.log("time", time.time)
  const[captions, setCaptions] = useState<any>();
  const[currentPhrases, setCurrentPhrases] = useState<any>();
  
  const timeToSeconds = (timeString:any) => {
    console.log("time", timeString)
    if (!timeString) {
      // console.error("Invalid time format:", timeString);
      return;
    }
    
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    
    // if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    //   console.error("Invalid time format:", timeString);
    //   return;
    // }
    
    return hours * 3600 + minutes * 60 + seconds;
  };
  // timeToSeconds(time.time);
  // console.log("Seconds:", timeToSeconds(time.time));


  useEffect(()=>{
    const fetchApi = async()=>{
      const api = await fetch("http://localhost:3000/api/translations/ykG8dVplZ_g")
      const data = await api.json();
      setCaptions(data?.ykG8dVplZ_g?.captions)
      // console.log("data", data)
    }
    fetchApi();
    }, [])

    useEffect(()=>{
      const currentTimeInSeconds = timeToSeconds(time.time); // Rounding down to the nearest second
      const caption = captions?.find((item:any)=>{
        const startTimeInSeconds = timeToSeconds(item.start_time);
        const endTimeInSeconds = timeToSeconds(item.end_time)
        // console.log("times", startTimeInSeconds, endTimeInSeconds)
        return currentTimeInSeconds >= startTimeInSeconds && currentTimeInSeconds <= endTimeInSeconds;
      })
      setCurrentPhrases(caption ? caption.phrases : null);
      // console.log("three times", currentTimeInSeconds)
      // console.log("current phrsases", currentPhrases)
    }, [time, captions])

  return (
    <div>
      <h1 className="font-bold">
      Translation
      </h1>
      {/* {data.captions.phrases.map((item: any) => {
        return <h1>{item.text}</h1>;
      })} */}
      {/* {data.ykG8dVplZ_g.captions[0].phrases[0].text} */}
      <div className="lg:m-5 m-2 bg-slate-200 rounded-md">
      {currentPhrases ? currentPhrases.map((item:any)=>{
        return(
          
          <div key={item.sentence_id} className="p-3">{item.text}</div>
        )
      }): null}
      </div>
      
    </div>
  );
};

export default Translations;
