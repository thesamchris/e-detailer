import React from 'react'
import Hero from '../shell/hero'
import Card from '../card'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => (
	<div>
		<Hero
			title="about us"
			subtitle="our company and our vision"
			imgClass="about_us__bg"
			secondaryTitle="Essof Enterprise"
		/>
		<div className="about_us__content">
			<div className="about_us__text">
				<p className="about_us__p">
					{`Essof Enterprise is a newly established auto detailer registered under
					the Registrar of Company. The company’s main business activities will
					be conducted from its detailing showroom and administrative office
					located at Unit D1, Ground Floor, Shakirin Complex, Kiulap in Bandar
					Seri Begawan. 1st branch expansion opened mid-May 2020 with a
					Detailing & Training Center at Lambak with the objective to train both
					new and experienced detailers who are looking to take their skills to
					the next level and have better understanding the methods of detailing.`}
				</p>
				<p className="about_us__p">
					{`The company will progress and build on its experience through partnership with global and regional industry partners to adopt technology and creative innovations to provide cost effective consumer-centric service delivery. Essof’s goal is to be one of the top car care providers in Brunei Darussalam; and is committed to offer total car care solutions that can enable car owners to choose us as their preferred brand. Essof Enterprise looks forward to further self-develop with the industry’s leading technologies which can offer the car owners a holistic retail experience and innovate the car detailing industry. `}
				</p>
			</div>
			<div className="about_us__list">
				<div className="about_us__list_item">
					<div className="about_us__list_item_title" style={{ width: `273px` }}>
						company vision
					</div>
					<p className="about_us__list_item_p">
						Creative in innovation and exploring all possibilities in car care
						technologies with global network, local knowledge and expertise.
					</p>
				</div>
				<div className="about_us__list_item">
					<div className="about_us__list_item_title">Total Satisfaction</div>
					<p className="about_us__list_item_p">
						Our detailers are all professionally trained and certified for your
						car care solutions!
					</p>
				</div>
			</div>
			<div className="about_us__text">
				<p className="about_us__p">
					{`Essof’s core Product & Services is to provide car care solutions to our customers. Product & Services offering includes:`}
					<ul>
						<li>{`Polish & Wax`}</li>
						<li>{`Ceramic Coating`}</li>
						<li>{`Wash`}</li>
						<li>{`Interior Care`}</li>
						<li>{`Detailing equipment`}</li>
						<li>{`DIY Products`}</li>
					</ul>
				</p>
			</div>
			<h1 className="about_us__partners">exclusive partner</h1>
			<div className="about_us__list">
				<div className="about_us__list_item">
					<Link to="/sonax" className="about_us__list_item_title">
						<div className="about_us__sonax_logo"></div>
					</Link>
					<p className="about_us__list_item_p">
						The market leader in car care products in Germany, and one of the
						leading manufacturers worldwide. The brand is represented in 100
						countries around the globe. For more than 60 years, the company has
						been developing and manufacturing high performance car care
						products, to satisfy the highest requirements, in Neuburg an der
						Donau.
						<p className="about_us__list_item_point">
							SONAX BEST CAR CARE BRAND FOR THE 15TH TIME IN A ROW! 
						</p>
						Sonax once again, received the Best Brand 2020 award for 1st place in the
						car care products category. This was the result of this year’s
						readers’ choice of the magazine “auto motor und sport”. SONAX has
						recorded further success in surveys conducted by “Auto Zeitung”
						which achieved “Top Brand 2020” and achieving “Best Brand” by
						specialist magazines “Autohaus” and “auto service praxis”.
					</p>
				</div>
				{/* <div className="about_us__list_item">
					<div className="about_us__list_item_title">
						<div className="about_us__maxshine_logo"></div>
					</div>
					<p className="about_us__list_item_p">
						A professional company which specializes in the development of the
						long throw dual action polishers and other detailing tools and
						accessories for more than 15 years. MaxShine gained initial success
						by developing and mass producing the first dual action polisher and
						bringing it to the US market.
						<p className="about_us__list_item_point">
							ONE OF THE MOST POPULAR DETAILING TOOL
						</p>
						{`BRANDS IN 50 COUNTRIES & REGIONS! MaxShine’s initial success derives
						from the passion for “car care”. Innovation will always remain as
						the first step in development. MaxShine will constantly keep up with
						world’s latest technology to help bring consumers the best detailing
						experience ever. MaxShine has become one of the most popular auto
						detailing tool and accessory brands in around 50 countries and
						regions globally.`}
					</p>
				</div> */}
			</div>
			<div className="about_us__press_container">
				<h1 className="about_us__partners">featured on the news</h1>
				<div className="about_us__cards_container">
					<Card
						title="Leading German car care products now available in Brunei"
						link="https://borneobulletin.com.bn/leading-german-car-care-products-now-available-brunei/"
						imgClass="press_one"
					/>
					<Card
						title="Leading German car care products at 5th BKS"
						link="https://borneobulletin.com.bn/leading-german-car-care-products-at-5th-bks/"
						imgClass="press_two"
					/>
					<Card
						title="Singapore ticket for winner"
						link="https://borneobulletin.com.bn/singapore-ticket-for-winner/"
						imgClass="press_three"
					/>
					<Card
						title="Ramadhan Deals 2020 winners receive prizes"
						link="https://borneobulletin.com.bn/2020/06/ramadhan-deals-2020-winners-receive-prizes/"
						imgClass="press_four"
					/>
					<Card
						title="Essof Enterprise opens new SONAX Brunei branch"
						link="https://borneobulletin.com.bn/2020/07/essof-enterprise-opens-new-sonax-brunei-branch/"
						imgClass="press_five"
					/>
				</div>
			</div>
		</div>
	</div>
)

export default About