import React from 'react'
import WashTemplate from './washTemplate'
import washDetails from '../../../../data/washDetails'

const StandardWash = () => (
    <WashTemplate data={washDetails.standardWash} title="Standard Wash"/>
)

export default StandardWash