import React from 'react'
import Hero from '../shell/hero'
import './about.css'
// import LeftImageSection from './leftImageSection'
import Product from '../product'

const SonaxPage = () => {
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
				{ productElements }
			</div>
		</div>
	</div>
)
}
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
	},
	{
		title: 'XTREME RICH FOAM SHAMPOO',
		desc:
			'Active foam shampoo for a dense, long lasting and intensively dirt dissolving foam carpet. Gentle on surfaces due to its pH neutral formulation. Can be used with a foam lance/foam gun (high pressure washer), a manual foam sprayer and as shampoo for manual washing.',
		prices: [{ left: '1L', right: 'BND$21.90' }],
		imgClass: 'rich_foam_shampoo',
	},
	{
		title: 'SONAX WASH & WAX',
		desc:
			'For rapid paintwork care during the manual car wash. Cleans and protects all in one. Dirt is thoroughly dissolved and the wax contained covers the paintwork with a protective coating, providing shine and conservation.',
		prices: [{ left: '1L', right: 'BND$25.90' }],
		imgClass: 'wash_wax',
	},
	{
		title: 'XTREME BRILLIANT WAX 1',
		desc:
			'The Hybrid NetProtection Technology forms a durable protective coat of strongly interlinked compounds on the paintwork. This produces gentle smoothness, a brilliant high gloss and outstanding lotus effect.',
		prices: [{ left: '250mL', right: 'BND$18.90' }],
		imgClass: 'bril_wax_1',
	},
	{
		title: 'XTREME POLISH & WAX 2',
		desc:
			'Polish with medium abrasive effect. The Hybrid Net Protection Technology forms a durable protective coat of strongly interlinked compounds on the [paintwork. This produce gentle smoothness, a brilliant high gloss and an outstanding lotus effect.',
		prices: [{ left: '250mL', right: 'BND$18.90' }],
		imgClass: 'polish_wax_2',
	},
	{
		title: 'SONAX HIGH SPEED WAX',
		desc:
			'The lightning fast paintwork sealant. Gives radiant shine and protection lasting many weeks. Highly effective cleaning and care emulsion, for new and nearly new paintwork. Seals the paintwork and gives a streak-free high gloss. Its easy application is especially convenient. Also suitable for maintaining all plastic and rubber components.',
		prices: [{ left: '500mL', right: 'BND$23.90' }],
		imgClass: 'high_speed_wax',
	},
	{
		title: 'XTREME BRILLIANT SHINE DETAILER',
		desc:
			'Gently and thoroughly cleans slightly soiled surfaces without scratching. Renews waxing and provides an additional water-repellent effect.',
		prices: [
			{ left: '750ml', right: 'BND$25.90' },
			{ left: '5L', right: 'BND$100.80' },
		],
		imgClass: 'bril_shine',
	},
	{
		title: 'XTREME SPRAY & SEAL',
		desc:
			'Fast and effective sealing of paintwork, chrome and plastics. Simply applied while washing the vehicle. Provides shine and a durable water and dirt-repellent effect. Also ideal for paintwork with long-term sealant for restoring the water-repellent effect.',
		prices: [
			{ left: '750ml', right: 'BND$38.90' },
			{ left: '5L', right: 'BND$155.96' },
		],
		imgClass: 'spray_seal',
	},
	{
		title: 'XTREME INTERIOR DETAILER',
		desc:
			'Gently, quickly and easily removes light soiling from interior trims, cockpits, upholstery seats, roof linings, etc. without leaving residues. Maintains the appearance of all surface such as plastic, vinyl, leather, rubber, metal. At the same time, it removes unpleasant odours. Prevents electrostatic charging and this has a dust-repellent effect. Silicone free. With pleasant fragrance.',
		prices: [{ left: '750ml', right: 'BND$28.90' }],
		imgClass: 'int_detailer',
	},
	{
		title: 'XTREME COCKPIT CLEANER',
		desc:
			'Seals the matt and textured surfaces to retain the fine textures of the modern, finely grained cockpits. Especially suitable for plastics with “soft touch effect”. Reliably prevents electrostatics charges, has a dust-repellent effect and protects against resoiling. The original matt appearance of the cockpit is maintained, annoying reflections in the windscreen are avoided. Leaves a pleasantly fresh fragrance. Also suitable for wooden instrument panels.',
		prices: [{ left: '300ml', right: 'BND$18.90' }],
		imgClass: 'cockpit_cleaner',
	},
	{
		title: 'XTREME LEATHER CARE FOAM',
		desc:
			'For the cleaning and care of car leather fittings, motorbike leathers, bags, furniture, etc. made from smooth leather. Suitable for leather of any colour. Restores the leather’s pliability. Ideal for vehicles with seat heating and for perforated leather surfaces. With leather scent. Silicone free.',
		prices: [{ left: '250ml', right: 'BND$18.90' }],
		imgClass: 'care_foam',
	},
	{
		title: 'SONAX CAR BREEZE',
		desc:
			'Eradicates nicotine, animal and other unpleasant odours in the car and at home. The product does not just mask the unpleasant odours, it neutralizes them. A subtle perfume provides a pleasant, long-lasting freshness. Suitable for upholstery, seats, carpets, curtains, textiles, shoes, clothes and as a room freshener.',
		prices: [{ left: '500ml', right: 'BND$16.90' }],
		imgClass: 'car_breeze',
	},
	{
		title: 'CAR A/C CLEANER',
		desc:
			'Cleans the A/C and ventilation systems. Eradicates unpleasant odours and provides a fresh fragrance. Extremely easy application! The air conditioner is an ideal medium for harmful germs. SONAX Car A/C Cleaner Air Aid quickly & easily ensures long-lasting air hygiene and eradicates unpleasant smells. Lasting protection when used regularly every six months.',
		prices: [
			{ left: 'Apple Fresh 100ml', right: 'BND$24.90' },
			{ left: 'Ocean Fresh 100ml', right: 'BND$24.90' },
			{ left: 'Green Lemon 100ml', right: 'BND$24.90' },
		],
		imgClass: 'car_ac',
	},
	{
		title: 'XTREME GLASS CLEAR',
		desc:
			'Glass cleaner for streak-free vision. Instantly frees windscreens and headlights from insects, dirt, exhaust deposits and nicotine. Quickly and easily eradicates smear ﬁlms and nicotine deposits from car interior windscreens and mirrors. Also ideal for household use on windows and mirrors. Phosphate-free.',
		prices: [{ left: '500ml', right: 'BND$18.90' }],
		imgClass: 'glass_clear',
	},
	{
		title: 'XTREME CLEARVIEW 1:100',
		desc:
			'Highly concentrated cleaning additive for the windscreen washer unit during summer. Just 25 ml of the concentrate give 2.5 litres of cleaning ﬂuid. Removes insects, oil, soot, silicone and dangerous dazzling ﬁlms without streaks. Does not induce stress cracks in anti-glare headlights. Ideal for high quality XENON headlamps and light diffusing plastic headlamps in clear-glass optic. With fresh fragrance. Comes in a practical bottle with dosing chamber. Phosphate-free.',
		prices: [{ left: '250ml', right: 'BND$18.90' }],
		imgClass: 'clearview',
	},
	{
		title: 'XTREME RIM CLEANER ACID FREE FULL EFFECT',
		desc:
			'Effortlessly removes the most stubborn dirt from steel, alloy, chrome-plated and polished wheel rims.',
		prices: [
			{ left: '500ml', right: 'BND$24.90' },
			{ left: '5L', right: 'BND$109.35' },
		],
		imgClass: 'rim_cleaner',
	},
	{
		title: 'XTREME TYRE GLOSS GEL',
		desc:
			'The innovative gel formula maintains and at, the same time, protects rubber against cracking and colour fading. Lasts for several weeks. Sufficient for at least 30 tyres.',
		prices: [{ left: '250ml', right: 'BND$21.90' }],
		imgClass: 'tyre_gloss_gel',
	},
	{
		title: 'SONAX FOAM SPRAYER',
		desc:
			'The SONAX Foam Sprayer 1L is designed for foaming liquid cleaning agents as far as those agents do not affect the materials used. The device may only be used for applying media which are suitable for foaming. This device is only approved for selected SONAX products.',
		prices: [{ left: '1L', right: 'BND$115.90' }],
		imgClass: 'sonax_foam_sprayer',
	},
	{
		title: 'SONAX CLAY BALL',
		desc:
			'For removing surface dirt contamination such as free sap, rust bloom, insect residue and tar stains from paintwork and glass.',
		prices: [{ left: 'N/A', right: 'BND$29.90' }],
		imgClass: 'clay_ball',
	},
]

export default SonaxPage