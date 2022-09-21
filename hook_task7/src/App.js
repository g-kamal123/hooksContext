import * as React from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import { Button, Typography } from "@mui/material";

const App = (props) => {
  var n,
    n2,
    n3;
  const [num1, setNum1] = React.useState();
  const [themecolor, setThemecolor] = React.useState("WHITE");
  const successor = (e) => {
    n = Number(e.target.value);
    if (isNaN(e.target.value)) {
      alert("Not a number");
      return
    } else {
      setNum1(n);
    }
  };
  
  n2 = React.useMemo(() => {
    return num1 + 1;
  });

  n3 = React.useMemo(() => {
    return num1 + 2;
  });

  const themechange = () => {
    if (themecolor !== "GREY") {
      setThemecolor("GREY");
    } else {
      setThemecolor("WHITE");
    }
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: themecolor }}>
        <TextField
          onChange={successor}
          id="outlined-basic"
          label="Enter number"
          variant="outlined"
        />
        <br />

        <Button onClick={themechange} variant="contained">
          Toggle theme
        </Button>
        {num1>=0 && <>
          <Typography mt={2}>{num1}</Typography>
        <Typography mt={2}>{n2}</Typography>
        <Typography mt={2}>{n3}</Typography>
        </>}
       
      </header>
    </div>
  );
};

export default App;
