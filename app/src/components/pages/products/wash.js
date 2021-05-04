import React from 'react'
import Hero from '../../shell/hero'
import './product_page.css'
import Card from '../../card'
import './wash.css'

const WashPage = () => (
	<div className="product_page__container">
		<Hero showContent={false} imgClass="wash_bg" secondaryTitle="wash" />
		<div className="product_page__content">
			{/* <h3 className="product_page__section_title">
				SONAX PREMIUM CLASS CARNAUBACARE
			</h3> */}
			<p className="product_page__p">
				Many don’t realize that hand washing a car at home can have a
				significant negative impact on the car’s paint. Typical garden hose
				usually does not produce enough water pressure for an adequate,
				damage-free clean on the car’s exterior. Plus, sponges and dirty water
				are just some of the reasons a professional car wash is a safer option
				than an at home scrub.
			</p>
            <div className="product_page__flex">
                <div className="wash_page__types_container">
                    <Card
						title="Standard Wash"
						link="/wash/standard"
						imgClass="red"
					/>
                    <Card
						title="Deluxe Wash"
						link="/wash/deluxe"
						imgClass="red"
					/>
                    <Card
						title="Premium Wash"
						link="/wash/premium"
						imgClass="red"
					/>
                    <Card
						title="Elite Wash"
						link="/wash/elite"
						imgClass="red"
					/>
                </div>
            </div>
			
			<div className="product_page__time_price_container">
				{/* <div className="product_page__time">Duration: 30 minutes</div> */}
				<div className="product_page__price">
					{/* <p className="product_page__price_starting">Our price is from $75</p> */}
					<div className="product_page__price_table">
						<table>
							<thead>
								<th>vehicle type</th>
								<th>standard wash</th>
								<th>deluxe wash</th>
								<th>premium wash</th>
								<th>elite wash</th>
								<th>additional brilliant shine</th>
								<th>additional interior dressing</th>
								<th>additional exterior dressing</th>
							</thead>
							<tbody>
								<tr>
									<td>small</td>
									<td>$15.00</td>
									<td>$25.00</td>
									<td>$35.00</td>
									<td>$45.00</td>
									<td>$10.00</td>
									<td>$10.00</td>
									<td>$10.00 to $20.00</td>
								</tr>
								<tr>
									<td>medium</td>
									<td>$20.00</td>
									<td>$35.00</td>
									<td>$50.00</td>
									<td>$65.00</td>
									<td>$15.00</td>
									<td>$15.00</td>
									<td>$10.00 to $20.00</td>
								</tr>
								<tr>
									<td>large / X-large</td>
									<td>$25.00 to $30.00</td>
									<td>$45.00 to $50.00</td>
									<td>$65.00 to $70.00</td>
									<td>$85.00 to $90.00</td>
									<td>$20.00</td>
									<td>$20.00</td>
									<td>$10.00 to $20.00</td>
								</tr>
							</tbody>
						</table>
						{/* <div className="product_page__price_disclaimer">
							Price may vary depending on vehicle’s paint condition (*exclude
							overspray case)
						</div> */}
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default WashPage