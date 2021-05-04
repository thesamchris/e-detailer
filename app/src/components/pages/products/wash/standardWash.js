import React from 'react'

const StandardWash = () => (
    <div>
        <div>
            <h1 className="wash_title">Standard Wash</h1>
        </div>
        <div className="wash__lists_container">
            <div className="tick_lists">
                <p className="tick_lists__title">Exterior:</p>
                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Exterior Wash with SONAX Foam Energy Shampoo</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Wheels, wheel wells & tires cleaning</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Drying with microfiber towel</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Air blown excess water</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Glass Clean with SONAX Glass Cleaner</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Tires dressing with SONAX Profiline Tire Gloss</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>SONAX High Speed Wax for paint protection</li>
                </ul>
            </div>
            <div className="tick_lists">
                <p className="tick_lists__title">Interior:</p>
                <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Vacuum</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Interior Wipe</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Glass Clean with SONAX Glass Cleaner</li>
                </ul>
            </div>
        </div>
        <div className="wash_duration">Duration: 30 minutes</div>
        <div className="wash_pricing__options_container">
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">S/M</p>
                <p className="wash_pricing__price">$15</p>
            </div>
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">L</p>
                <p className="wash_pricing__price">$20</p>
            </div>
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">X/L</p>
                <p className="wash_pricing__price">$25 - $30</p>
            </div>
        </div>
        <hr />
        <div className="wash_vehicle__reference"></div>
    </div>
)

export default StandardWash