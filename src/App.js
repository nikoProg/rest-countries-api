//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          {/* <Home></Home> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/countries/:countryName">
              <CountryDetails></CountryDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          
        </div>
      </div>
    </Router>
  );
}

export default App;
