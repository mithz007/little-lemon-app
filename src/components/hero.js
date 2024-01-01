import React from "react";
import imageSrc from '../images/restauranfood.jpg'

export function HeroSection() {
    return (
        <section>
            <div className="heroSection">
                <div className="d-flex description">
                    <h1 className="heading-h1">Little Lemon</h1>
                    <h2 className="heading-h2">Chicago</h2>
                    <div className="hero-description">
                        We are family owned Mediterranean Restaurant,
                        focussed on traditional recipes serverd with a modern twist.
                    </div>
                    <input type="button" className="btn-yellow mb-10" value="Reserve a Table"/>
                </div>
            </div>
            <div className="d-flex">
                <img className="restro-food-img" src={imageSrc} alt="restro-food" />
            </div>
        </section>
    )
}