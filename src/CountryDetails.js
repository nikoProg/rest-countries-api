import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const CountryDetails = () => {
    const { countryName } = useParams(); 
    //the next line is simply placeholder for AFGHANISTAN, because i can't load fetched data for some reason
    const { country, error, isPending } = useFetch('https://restcountries.com/v2/alpha/' + 'AFG');//is array a problem, alpha returns obj, not arr!
    // const history = useHistory();

    return ( 
        <div className="country-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { country && (
                <article>
                    <h2> NAME { country.name }</h2>
                    <p> REGION { country.region }</p>
                    <div>{ country.flag }</div>
                </article>
            )}
        </div>
     );
}
 
export default CountryDetails;