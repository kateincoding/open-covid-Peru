import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import DownBar from "../../components/downbar/downbar";

function Statistics(){
  return (
    <div>
      <FormControl className="app_drop_down">
        <Select
              variant="outlined"
              value = "abc"
            >
              <Menu MenuItem value="Fallecidos/día"> </Menu>
              <Menu MenuItem value="Vacunados/día"> </Menu>
              <Menu MenuItem value="UCI/día"> </Menu>

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

export default Statistics;