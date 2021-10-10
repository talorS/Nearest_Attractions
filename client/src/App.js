import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from './components/DashBoard/Dashboard';
import Attractions from './components/Attractions/Attractions';

function App() {
  const flag = useSelector(
    (state) => state.user.locationExist
  );

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/attractions">
        {flag ? <Attractions /> : <Redirect to="/" />} 
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
