import React from 'react'
import Hero from '../../shell/hero'
import './product_page.css'

const PolishPage = () => (
	<div className="product_page__container">
		<Hero showContent={false} imgClass="polish_bg" secondaryTitle="polish" />
		<div className="product_page__content">
			<h3 className="product_page__section_title">SONAX PROFILINE POLISH</h3>
			<p className="product_page__p">
				Special professional polish for optimal scratch removal, impressing deep
				shine and outstanding restoration of colours. In single-level processes,
				it yields results that had previously been possible with rotary
				processes only. For a top hologram-free result. Silicone free and low
				dusting (low-dust technology).
			</p>
			<div className="product_page__list">
				<p className="product_page__list_title">Package includes:</p>
				<ul className="product_page__list_ul">
					<li>SONAX Profiline Polish</li>
					<li>Car wash</li>
					<li>Paint decontamination (Clay bar treatment)</li>
					<li>Brushing door edges</li>
					<li>Glass clean</li>
					<li>{'Interior cleaning & dressing'}</li>
					<li>SONAX Brilliant Shine Detailer</li>
					<li>SONAX Speed Wax</li>
				</ul>
			</div>
			<div className="product_page__time_price_container">
				<div className="product_page__time">Duration: 4 to 5 hours</div>
				<div className="product_page__price">
					<p className="product_page__price_starting">
						Our price is from $120 <br />
						*Add on: SONAX Polymer Net Shield from $50 <br />
						*Add on: SONAX CC36 Coating (1 layer) from $150 *Add on: SONAX CC36{' '}
						<br />
						Coating (3 layer) from $349
					</p>
					<div className="product_page__price_table">
						<table>
							<thead>
								<th>vehicle type</th>
								<th>{'polish & seal'}</th>
								<th>{'*add on: polymer netshield'}</th>
								<th>{'1 layer cc36 coating *based on PC'}</th>
								<th>{'full 3 layer layer cc36 coating *based on PC'}</th>
							</thead>
							<tbody>
								<tr>
									<td>small</td>
									<td>$120.00</td>
									<td>*additional $50.00</td>
									<td>$150.00</td>
									<td>$349.00</td>
								</tr>
								<tr>
									<td>medium</td>
									<td>$140.00</td>
									<td>*additional $60.00</td>
									<td>$199.00</td>
									<td>$399.00</td>
								</tr>
								<tr>
									<td>large</td>
									<td>$170.00</td>
									<td>*additional $70.00</td>
									<td>$199.00</td>
									<td>$399.00</td>
								</tr>
								<tr>
									<td>x-large</td>
									<td>$200 to $230</td>
									<td>*additional $85.00 to $100.00</td>
									<td>$199.00</td>
									<td>$399.00</td>
								</tr>
							</tbody>
						</table>
						<div className="product_page__price_disclaimer">
							Price may vary depending on vehicle’s paint condition (*exclude
							overspray case)
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default PolishPage