import React from "react";
import './Services.css'

function Services(){
    return(
        <div id="services" className="services">
            <h1 className="services-head">Services We Offer</h1>
            <div className="services__container">
                <div className="services__wrapper">
                    <ul className="services-items">
                        <li className="services-maddeler">Post lost items</li>
                        <li className="services-maddeler">Post find items</li>
                        <li className="services-maddeler">Now it is easy to find your items</li>
                    </ul>

                </div>

            </div>

        </div>

    )
}

export default Services;