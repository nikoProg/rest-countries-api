import { useEffect, useState } from 'react';
// this import is redundant because it is already in useFetch.js

import CountryList from './components/CountryList';
import useFetch from './components/useFetch';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const { data : countries, isPending, error} = useFetch('https://restcountries.com/v2/all');
    
    const history = useHistory(); // for going back one page
    const [region, setRegion] = useState(null);

    return (
        <div className="home">
            <div className='country-filters'>               
                <form>
                    <input
                        type="text"
                        placeholder='Search'
                    />
                    <select
                        name="region"
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        defaultValue="select a continent"
                        defaultChecked="select"
                    >
                        <option disabled selected value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </form>
                
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {countries && <CountryList countries={countries} ></CountryList>}
            
        </div>
      );
}
 
export default Home;