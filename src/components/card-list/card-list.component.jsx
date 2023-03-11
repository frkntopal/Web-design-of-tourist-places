import React from "react";
import CountryCard from "../country-card/countryCard.component";
import './card-list.styles.css'

function CountryCardList(props) {
    

    return (
        <div className="country-card-list">
            {props.countries.map((country) => (
                <CountryCard key={country.id} country={country}/>
            ))}
        </div>
    )

}

export default CountryCardList