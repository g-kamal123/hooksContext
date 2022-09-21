import React, { useEffect, useState } from 'react'

function Countdown() {
    const [hour,setHour] = useState('hours')
    const [minute,setMinute] = useState('mins')
    const [second,setSecond] = useState('secs')

    var interval = 1;
    if(hour!=='hours')   interval = 0;
    const countdownHandler =(hrs,mins,secs)=>{
        // console.log(hrs,mins,secs)
        if(interval===1){
            setHour(()=>hrs)
            setMinute(()=>mins)
            setSecond(()=>secs)
            setInterval(() => {
                tick()
            }, 1000)
        }
    }
    useEffect(()=>{
        if(second<0){
            setSecond(59)
            setMinute((prevM)=>prevM-1)
        }
    },[second])
    useEffect(()=>{
        if(minute<0){
            setMinute(59)
            setHour(prevH=>prevH -1)
        }
    },[minute])

    const tick =(hrs,mins,secs)=>{
        setSecond((prevS)=> prevS - 1)
    }
  return (
    <div>
        <div>
            <p>{hour}</p>
            <p>{minute}</p>
            <p>{second}</p>
        </div>
        <button onClick={()=>countdownHandler(new Date().getHours(),new Date().getMinutes(),new Date().getSeconds(),)}>start countdown</button>
    </div>
  )
}

export default Countdown