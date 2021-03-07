import React from 'react';
import DownBar from "../../components/downbar/downbar";
import Title from "../../components/stat_title/stat_title";
import Selector from "../../components/selector/selector";

function Statistics(){
  return (
    <div className>
      <div className="container">
        <Title/>
        <Selector/>
      </div>
      
      <DownBar/>
    </div>
  );
}

export default Statistics;