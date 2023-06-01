import React, { useRef, useState } from 'react'

type timerType={
    min:number,
    sec:number,
    msec:number
}

type lapArr=timerType[];

export default function StopWatch() {
    const [lapArr, setLapArr] = useState([] as lapArr);
    const [timer, setTimer] = useState({min:0,sec:0,msec:0});
    const interValRef=useRef<number|null>(null);

    const startTimer=()=>{
        
        if(!interValRef.current){
            interValRef.current=window.setInterval(()=>{
                
                setTimer((prevTimer)=>{
                    prevTimer.msec++;
                    if(prevTimer.msec>=100)prevTimer.sec++;
                    prevTimer.msec%=100;
    
                    if(prevTimer.sec>=60)prevTimer.min++;
                    prevTimer.sec%=60;
    
                    return {min:prevTimer.min,sec:prevTimer.sec,msec:prevTimer.msec};
                })
            },20)
        }
    }

    const stopTimer=()=>{
        if(interValRef.current){
            window.clearInterval(interValRef.current);
            interValRef.current=null;
        }
    }

    const recordLap=()=>{
        setLapArr([{min:timer.min,sec:timer.sec,msec:timer.msec},...lapArr]);
    }

    const resetTimer=()=>{
        if(interValRef.current){
            window.clearInterval(interValRef.current);
            interValRef.current=null;
        }
        setTimer({min:0,sec:0,msec:0})
    }

    return (
        <>
            <div>StopWatch - <h2>Min : {timer.min} , Sec : {timer.sec} , MSec : {timer.msec}</h2></div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={recordLap}>Lap</button>
            <button onClick={resetTimer}>Reset</button>
            <div>
                {
                    lapArr.map((item)=><h3>Min : {item.min} , Sec : {item.sec} , MSec : {item.msec}</h3>)
                }
            </div>
        </>
    )
}
