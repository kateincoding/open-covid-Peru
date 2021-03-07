import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import DownBar from "../../components/downbar/downbar";

{/*
  falta json para leer variables y crear arrays
  para leer el doc .json, primero se pasa a json y luego se le asigna los zipcode de la base de datos a distritos
  componentDidMount() {
    fetch('ARCHIVO JSON')
    .then(response => response.json())
    .then(ZipCode => this.setState({ distritos: ZipCode }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };
  el render funciona porque importa Component 
  render() {
    const {distritos, searchField} = this.state;
    const filtereddistritos = distritos.filter(distrito => 
      distrito.name.toLowerCase().includes(searchField.toLowerCase())
    ); 
*/}


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