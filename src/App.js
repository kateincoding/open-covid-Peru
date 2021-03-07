
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Statistics from "./pages/statistics/statistics";
import Uci from "./pages/uci/uci";
import Call from "./pages/call/call";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/uci' component={Uci} />
          <Route exact path='/call' component={Call} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
