import { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

const CountriesContext = createContext( {children} );

export const CountriesProvider = () => {
    const [countries, setCountries] = useState([]);

    useFetch('https://restcountries.com/v2/all');

    return(
        <CountriesContext.Provider value={{ countries, setCountries }}>
            {children}
        </CountriesContext.Provider>
    )

}

export default CountriesContext;