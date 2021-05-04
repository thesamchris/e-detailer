import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
// import CompanyPageFold from './components/companyPageFold'
import Hero from './components/shell/hero'
import HomePage from './components/pages/home'
import LeftImageSection from './components/pages/leftImageSection'
import WorkPage from './components/pages/work'
import ServicesPage from './components/pages/services'
import AboutPage from './components/pages/about'
import SonaxPage from './components/pages/sonax'
import ContactPage from './components/pages/contact'
import WaxPage from './components/pages/products/wax'
import PolishPage from './components/pages/products/polish'
import WashPage from './components/pages/products/wash/wash'
import PromotionsPage from './components/pages/promotions'
import CategoryShampoo from './components/pages/products/categories/shampoo'
import MobileWebsiteNotice from './components/mobileWebsiteNotice';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/">
				<MobileWebsiteNotice />
				<HomePage />
				{/* <LeftImageSection /> */}
			</Route>
			<Route path="/about">
				<App>
					<AboutPage />
					{/* <CompanyPageFold /> */}
				</App>
			</Route>
			<Route path="/work">
				<App>
					<WorkPage />
				</App>
			</Route>
			<Route path="/services">
				<App>
					<ServicesPage />
				</App>
			</Route>
			<Route path="/products">
				<App>
					<Route path="/shampoo">
						<CategoryShampoo />
					</Route>
					<SonaxPage />
				</App>
			</Route>
			<Route path="/sonax">
				<App>
					<Hero
						showContent={false}
						imgClass="sonax_more__bg"
						secondaryTitle="exclusive partner"
					/>
					<div className="about_us__content sonax_page__content">
						<div className="about_us__list">
							<div className="about_us__list_item">
								<div
									className="about_us__list_item_title"
									style={{ width: `470px` }}
								>
									APPOINTED AS SONAX DISTRIBUTOR IN BRUNEI
								</div>
								<p className="about_us__list_item_p sonax_page__p">
									{`Essof Enterprise is the appointed SONAX Distributor in Brunei. Essof
						Enterprise is assigned the rights to promote, advertise, tender,
						sell & exhibit SONAX’s car care products.`}
								</p>
							</div>
							<div className="about_us__list_item">
								<div
									className="about_us__list_item_title"
									style={{ width: `470px` }}
								>
									GERMANY’S #1 CAR CARE BRAND
								</div>
								<p className="about_us__list_item_p sonax_page__p">
									SONAX is the market leader in car care products in Germany,
									and one of the leading manufacturers worldwide. The brand is
									represented in 100 countries around the globe. For more than
									60 years, the company has been developing and manufacturing
									high performance car care products, to satisfy the highest
									requirements, in Neuburg an der Donau. Whether it’s in
									motorsports, in the tuning scene or in the world of classic
									cars: When it comes to the perfect presentation of
									automobiles, SONAX will always be on hand, for car fans and
									experts. SONAX develops car care products that last longer,
									perform better and shine brighter. SONAX was one of the first
									car care companies to pro-actively develop environmentally
									friendly products and they are on the leading edge of
									nanotechnology.
								</p>
							</div>
						</div>
					</div>
					<LeftImageSection
						title="SONAX BEST CAR CARE BRAND FOR THE 15TH TIME IN A ROW"
						p="SONAX once again, received the Best Brand 2020 award for 1st place in the car care products category. This was the result of this year’s readers’ choice of the magazine “auto motor und sport”. SONAX has recorded further success in surveys conducted by “Auto Zeitung” which achieved “Top Brand 2020” and achieving “Best Brand” by specialist magazines “Autohaus” and “auto service praxis”."
						imgClass={'sonax_page__best_brand_img'}
					/>
				</App>
			</Route>
			<Route path="/contact">
				<App>
					<ContactPage />
				</App>
			</Route>
			<Route path="/wax">
				<App>
					<WaxPage />
				</App>
			</Route>
			<Route path="/polish">
				<App>
					<PolishPage />
				</App>
			</Route>
			<Route path="/wash">
				<App>
					<WashPage />
				</App>
			</Route>
			<Route path="/promotions">
				<App>
					<PromotionsPage />
				</App>
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
