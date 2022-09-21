import React, { useEffect, useState } from 'react'

function Increment() {
    const[count,setCount] = useState(0)

    // var t =1
    const increment1Handler =()=>{
        for(let i=0;i<20000000000;i++){
        setCount(prev=>prev+1)
        }
    }
    useEffect(()=>{
            return ()=>{
                
            }
    })
    const increment2Handler =()=>{
        setCount(prev=>prev+1)
    }
  return (
    <div>
        <p>Count:{count} <span>{count%2===0 ? ' even':' odd'}</span></p>
        <button onClick={increment1Handler}>increment1 {count}</button>
        <button onClick={increment2Handler}>increment2 {count}</button>
    </div>
  )
}

export default Increment