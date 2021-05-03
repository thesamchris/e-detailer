import React from 'react'
import Hero from '../../shell/hero'
import '../about.css'
// import LeftImageSection from './leftImageSection'
import Product from '../../product'

/* this is how products info should look like
const productsInfo = [
    {
        title: 'SONAX GLOSS SHAMPOO',
        desc:
            'Concentrated cleaning power for the manual vehicle wash. Works quickly and thoroughly against typical road dirt without damaging the protective wax layer on the paint. Suitable for cleaning all paintwork surfaces, metal, glass, plastics, rubber, as well as tiles, porcelain, and enamelled surfaces. Phosphate-free.',
        prices: [
            { left: '1L', right: 'BND$19.90' },
            { left: '2L', right: 'BND$72.96' },
        ],
        imgClass: 'gloss_shampoo',
    }
]
*/

const CategoryTemplate = ({ productsInfo }) => {
    let productElements = productsInfo.map((product) => (
        <Product
            title={product.title}
            imgClass={product.imgClass}
            desc={product.desc}
            prices={product.prices}
        />
    ))
    return (
        <div className="sonax_page__container">
            <Hero
                showContent={false}
                imgClass="sonax__bg"
                secondaryTitle="our products"
            />

            <div className="about_us__content sonax_page__content">
                <h1 className="sonax_page__products_title">products</h1>
                <div className="sonax_page__products_container">
                    {productElements}
                </div>
            </div>
        </div>
    )
}

export default CategoryTemplate