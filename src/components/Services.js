import React from "react";
import './Services.css'
import HowToUse from "./HowToUse/HowToUse";

function Services(){
    return(
        <div id="services" className="services">
            <h1 className="services-head">Services We Offer</h1>
            <div className="services__container">
                <div className="services__wrapper">
                    <ul className="services-items">
                        <li className="services-maddeler">Lost Item Reporting: Reporting of lost items.</li>
                        <li className="services-maddeler">Company Collaboration: Coordination and information sharing
                            with businesses.
                        </li>
                        <li className="services-maddeler">Security Protocols: Measures to protect user data.</li>
                        <li className="services-maddeler">Found Item Listings: Users reporting found items.</li>
                        <li className="services-maddeler">Community Engagement: Encouraging users to actively
                            participate in helping others find lost items.
                        </li>
                    </ul>

                </div>

            </div>
            <h2 className="services-head">How LocateLost Works</h2>
            <div className="how-to">
                <HowToUse/>
            </div>

        </div>

    )
}

export default Services;