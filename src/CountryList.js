import { Link } from "react-router-dom";

const CountryList = ( { countries, title }) => {

    return (
        <div className="country-list">
            <h2>{title}</h2>
            {countries.map((country) => (
                <div className="country-preview" key={country.name}>
                    <Link to={`/countries/${country.name}`}>
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