import React from 'react'
import WashTemplate from './washTemplate'
import washDetails from '../../../../data/washDetails'

const PremiumWash = () => (
    <WashTemplate data={washDetails.premiumWash} title="Premium Wash"/>
)

export default PremiumWash