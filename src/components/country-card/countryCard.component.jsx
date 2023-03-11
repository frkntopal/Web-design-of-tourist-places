import React from "react";

import './countryCard.styles.css'

function CountryCard(props) {
    return (
        <div key={props.country.id} className="card-container" >
           <div className="card-box"> 
            <img className="img-box" src={props.country.url} alt={props.country.country} />
                <div>
                    <div className="title"> <h2>{props.country.country}</h2></div>
                   <div className="title">  <h3>{props.country.state}</h3></div>
                  
                </div>
            </div>
        </div>
    )
}
export default CountryCard