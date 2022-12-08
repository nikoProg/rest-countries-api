//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import NotFound from './components/NotFound';
import { CountriesProvider } from './components/CountriesContext';

function App() {
  return (
    <CountriesProvider>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="content">
            {/* <Home></Home> */}
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/countries/:countryCode">
                <CountryDetails ></CountryDetails>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>

            
          </div>
        </div>
      </Router>
    </CountriesProvider>
  );
}

export default App;
