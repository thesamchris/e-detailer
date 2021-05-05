import React from 'react'
import './wash.css'

const WashTemplate = ({ title, data }) => {
    let { exteriorItems, interiorItems, S, L, XL, duration } = data
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
                <p className="wash_pricing__size">S/M</p>
                <p className="wash_pricing__price">{ S }</p>
            </div>
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

export default WashTemplate