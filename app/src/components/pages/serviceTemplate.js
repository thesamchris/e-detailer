import React from 'react'
import './products/wash/wash.css'

const ServiceTemplate = ({ title, data }) => {
    let { exteriorItems, interiorItems, S, M, L, XL, duration, intro, introText } = data
    let exteriorListItems = exteriorItems.map((item, key) => (
        <li key={key}>
            <span className="fa-li">
                <i className="fas fa-check"></i>
            </span>
            { item }
        </li>
    ))
    let interiorListItems = interiorItems.map((item, key) => (
        <li key={key}>
            <span className="fa-li">
                <i className="fas fa-check"></i>
            </span>
            { item }
        </li>
    ))

    return (
    <div>
        <div>
            <h1 className="wash_title">{ title }</h1>
        </div>
        { intro ? (
            <div>
                <h3 className="product_page__section_title">
                    { intro }
                </h3>
                <p className="product_page__p">
                    { introText }
                </p>
            </div>
        ) : ''}
        <div className="wash__lists_container">
            <div className="tick_lists">
                <p className="tick_lists__title">Exterior:</p>
                <ul className="fa-ul">
                    { exteriorListItems }
                </ul>
            </div>
            <div className="tick_lists">
                <p className="tick_lists__title">Interior:</p>
                <ul className="fa-ul">
                    { interiorListItems }
                </ul>
            </div>
        </div>
        <div className="wash_duration">Duration: { duration }</div>
        <div className="wash_pricing__options_container">
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">{S && M ? 'S': 'S/M'}</p>
                <p className="wash_pricing__price">{ S }</p>
            </div>
            {M ?  (
                <div className="wash_pricing__option">
                    <div className="wash_pricing__image"></div>
                    <p className="wash_pricing__size">M</p>
                    <p className="wash_pricing__price">{ M }</p>
                </div>
            ): ''}
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">L</p>
                <p className="wash_pricing__price">{ L }</p>
            </div>
            <div className="wash_pricing__option">
                <div className="wash_pricing__image"></div>
                <p className="wash_pricing__size">X/L</p>
                <p className="wash_pricing__price">{ XL }</p>
            </div>
        </div>
        <hr />
        <div className="wash_vehicle__reference"></div>
    </div>
)}

export default ServiceTemplate