import React from 'react'
import greekSaladImage from '../images/greek salad.jpg'
import bruchettaImage from '../images/bruchetta.svg'
import lemonDessertImage from '../images/lemon_dessert.jpg'

export function Specials() {
    return (
        <section className="special-section">
            <div className='special-banner'>
                <h2 className="special-heading">This week's specials!</h2>
                <input type="button" className="btn-yellow mb-10" value="Online Menu" />
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className="special-image">
                        <img src={greekSaladImage} alt="greek-salad" />
                    </div>
                    <div className='dish-name-price'>
                        <span>Greek Salad</span>
                        <span className='price'>$12.99</span>
                    </div>
                    <div className='dish-description'>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                        style feta cheese, garnished with cruncy garlic and rosemary croutons.
                    </div>
                    <div className='delivery-container'>
                        <h2 className='order-delivery'>Order a delivery</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className="special-image">
                        <img src={bruchettaImage} alt="bruchetta" />
                    </div>
                    <div className='dish-name-price'>
                        <span>Bruchetta</span>
                        <span className='price'>$5.99</span>
                    </div>
                    <div className='dish-description'>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                        style feta cheese, garnished with cruncy garlic and rosemary croutons.
                    </div>
                    <div className='delivery-container'>
                        <h2 className='order-delivery'>Order a delivery</h2>
                    </div>
                </div>
                <div className='card'>
                    <div className="special-image">
                        <img src={lemonDessertImage} alt="Lemon-Dessert" />
                    </div>
                    <div className='dish-name-price'>
                        <span>Lemon Dessert</span>
                        <span className='price'>$5.00</span>
                    </div>
                    <div className='dish-description'>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago
                        style feta cheese, garnished with cruncy garlic and rosemary croutons.
                    </div>
                    <div className='delivery-container'>
                        <h2 className='order-delivery'>Order a delivery</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
