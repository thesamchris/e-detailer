import React from 'react'
import CategoryTemplate from '../categoryTemplate'

const productsInfo = [
    {
        title: 'SONAX GLOSS SHAMPOO',
        desc:
            'Concentrated cleaning power for the manual vehicle wash. Works quickly and thoroughly against typical road dirt without damaging the protective wax layer on the paint. Suitable for cleaning all paintwork surfaces, metal, glass, plastics, rubber, as well as tiles, porcelain, and enamelled surfaces. Phosphate-free.',
        prices: [
            { left: '1L', right: 'BND$15.90' },
        ],
        imgClass: 'gloss_shampoo',
    },
    {
        title: 'SONAX XTREME RICH FOAM SHAMPOO',
        desc:
            'Active foam shampoo for a dense, long lasting and intensively dirt dissolving foam carpet.Gentle on surfaces due to its pH neutral formulation. Can be used with a foam lance/ foam gun (high pressure washer), a manual foam sprayer and as shampoo for manual washing.',
        prices: [
            { left: '1L', right: 'BND$24.90' },
        ],
        imgClass: 'xtreme_shampoo',
    },
    {
        title: 'SONAX WASH & WAX',
        desc:
            'For rapid paintwork care during the manual car wash. Cleans and protects all in one. Dirt is thoroughly dissolved and the wax contained covers the paintwork with a protective coating, providing shine and conservation.',
        prices: [
            { left: '1L', right: 'BND$25.90' },
        ],
        imgClass: 'washwax_shampoo',
    },
]

const CategoryShampoo = () => (
    <CategoryTemplate productsInfo={productsInfo}/>
)

export default CategoryShampoo