import React from "react";

function DownBar(){
  return (
    <div>
    <div className="main-downbar">
      <div>
        <a href="/">
          <i class="fas fa-home fa-2x downbar-icon"></i>
        </a>
        
      </div>
      <div>
        <a href="/statistics">
          <i class="fas fa-chart-area fa-2x downbar-icon"></i>
        </a>
      
      </div>
      <div>
        <a href="/uci">
          <i class="fas fa-bed fa-2x downbar-icon"></i>
        </a>
      
      </div>
      <div>
        <a href="/call">
          <i class="fas fa-phone-alt fa-2x downbar-icon"></i>
        </a>
        
      </div>
      
    </div>
  </div>
  );
}


export default DownBar;