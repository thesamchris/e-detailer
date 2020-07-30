import React from 'react'
import './partners.css'
import { Link } from 'react-router-dom'

const Partners = () => (
    <div className="partners__container">
        <p className="partners__title">we work with the best</p>
        <Link to="/sonax" style={{ display: 'block' }} className="partners__sonax"></Link>
    </div>
)

export default Partners