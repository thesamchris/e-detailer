import React from 'react'
import Hero from '../shell/hero'
import './promotions.css'

const PromotionsPage = () => (
    <div>
        <Hero title="promotions" subtitle="the best deals" showLink={false} secondaryTitle="best quality at best price" imgClass="promotions_bg"/>

        <div className="promotions_page__content">
            <div className="promotions_page__promo yearlya_promo"></div>
            <div className="promotions_page__promo yearlyb_promo"></div>
        </div>
    </div>
)

export default PromotionsPage