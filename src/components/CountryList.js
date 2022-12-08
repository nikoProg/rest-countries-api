import { Link } from "react-router-dom";

const CountryList = ( { countries }) => {

    return (
        <div className="country-list">
            
            {countries.map((country) => (
                <div className="country-preview" key={country.alpha3Code}>
                    <Link to={`/countries/${country.alpha3Code}`}>
                        <h2>{ country.name }</h2>
                        <p>{country.nativeName}</p>
                        <img className="flag-img" src={country.flag} alt="SVG image" />
                        <p> Population: {country.population}</p>
                        <p> Region: {country.region}</p>
                        <p> Capital: {country.capital}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default CountryList;