import React from 'react';
import './home.styles.css';
import {
  MenuItem,
  FormControl,
  Select,
/*}  Card,
CardContent, */
} from "@material-ui/core";
import DownBar from "../../components/downbar/downbar";

function Home(){
  return (
    <div className="app-header">
      <h1>Selecciona tu distrito:</h1>
      <FormControl className="app-dropdown">
        <Select
              variant="outlined"
              value = "abc"
            >
              <MenuItem MenuItem value="Distrito">Lima</MenuItem>
              <MenuItem MenuItem value="Distrito">Ica</MenuItem>
              <MenuItem MenuItem value="Distrito">Piura</MenuItem>

           {/* value={index}
              onChange={onIndexChange} 
            >
              <MenuItem value="index">Worldwide</MenuItem>
              {countries.map((index) => (
              <MenuItem value={index.value}>{index.name}</MenuItem> 
              ))} */}

        </Select>
      </FormControl>
      <DownBar/>
    </div>
  );
}

export default Home;