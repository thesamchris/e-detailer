import React from 'react'
import Hero from '../../shell/hero'
import './product_page.css'

const WaxPage = () => (
	<div className="product_page__container">
		<Hero showContent={false} imgClass="wax_bg" secondaryTitle="wax"/>
		<div className="product_page__content">
			<h3 className="product_page__section_title">
				SONAX PREMIUM CLASS CARNAUBACARE
			</h3>
			<p className="product_page__p">
				High quality protection for your vehicle’s paintwork. Protects against
				weathering and other environmental hazards, reduces insect adhesion.
				Visible results with the droplet run off effect. The highly concentrated
				Carnauba wax maintains the paintwork and provides a radiant shine. The
				formula is really easy to polish out and leaves no greasy smears.
			</p>
			<div className="product_page__list">
				<p className="product_page__list_title">Package includes:</p>
				<ul className="product_page__list_ul">
					<li>SONAX Premium Class Carnauba Wax</li>
					<li>Car wash</li>
					<li>Paint decontamination (Clay bar treatment)</li>
					<li>Brushing door edges</li>
					<li>Glass clean</li>
					<li>{'Interior cleaning & dressing'}</li>
					<li>SONAX Speed Wax</li>
				</ul>
			</div>
            <div className="product_page__time_price_container">
                <div className="product_page__time">Duration: 2 to 3 hours</div>
                <div className="product_page__price">
                    <p className="product_page__price_starting">Our price is from $75</p>
                    <div className="product_page__price_table">
                        <table>
                            <thead>
                                <th>vehicle type</th>
                                <th>package</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>small</td>
                                    <td>$60.00</td>
                                </tr>
                                <tr>
                                    <td>medium</td>
                                    <td>$70.00</td>
                                </tr>
                                <tr>
                                    <td>large</td>
                                    <td>$75.00</td>
                                </tr>
                                <tr>
                                    <td>x-large</td>
                                    <td>$85 to $95</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="product_page__price_disclaimer">Price may vary depending on vehicle’s paint condition (*exclude overspray case)</div>
                    </div>
                </div>
            </div>
		</div>
	</div>
)

export default WaxPage