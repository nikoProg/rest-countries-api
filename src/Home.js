import { useEffect, useState } from 'react';
// this import is redundant because it is already in useFetch.js

import CountryList from './CountryList';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const { data : countries, isPending, error} = useFetch('https://restcountries.com/v2/all');
    
    const history = useHistory(); // for going back one page
    const [continent, setContinent] = useState(null);

    return (
        <div className="home">
            <div>SEARCH</div>
            <form>
                <input
                    type="text"
                />
            </form>
            
            <select
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
            >
                <option value="EU">Europe</option>
                <option value="ASI">Asia</option>
                <option value="AFR">Africa</option>
                <option value="SAM">South America</option>
                <option value="NAM">North America</option>
                <option value="AUS">Australia</option>
            </select>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {countries && <CountryList countries={countries} ></CountryList>}
        </div>
      );
}
 
export default Home;