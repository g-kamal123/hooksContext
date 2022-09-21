import React from 'react'


const BtnCounter = () => {

    const [clicktimes,setClicktimes] = React.useState(0);
    
    const handleClick=(event)=>{
        var c= clicktimes;
        setClicktimes(c+1)
        }

    return (
        <div>
          <button  className='clickbtn' onClick={handleClick} >
            {clicktimes===0? "Click me":"Total "+clicktimes+" times"}
           
              </button>
        </div>
      )
}

export default BtnCounter