import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./App.css"
export default function App() {
  const [count,setCount] = React.useState(-1);
  const [type,setType] = React.useState('');
  const [time,setTime] = React.useState(0);

  React.useEffect(()=>{
    setCount(count+1);
    if(count%2 === 0){
      setType("Odd");
    }
    else{
      setType("Even");
    }
  },[time])

  const inc1 =()=>{
    let c = count;
    setTimeout(()=>{
      setTime(time+1)
      
    },2000);
  }

  const inc2 =()=>{
    let c = count;
    setCount(c+1);
    console.log(count)
    if(count%2 === 0){
      setType("Odd");
    }
    else{
      setType("Even");
    }
  }

  return (
    <div className='App-header'>
      <h1>{count}</h1>
      <h2>{type}</h2>
    <Stack spacing={2} direction="row">
      
      <Button onClick={inc1} variant="contained">Increment 1</Button>
      <Button onClick={inc2} variant="outlined">Increment 2</Button>
    </Stack>
    </div>
  );
}
