import React from 'react'
import restroChefImage from '../images/restaurant_chef.jpg';
import restroImage from '../images/restaurant.jpg';

export function About() {
    return (<section>
        <div className="about-conatiner">
            <div className="d-flex description">
                <h1 className="title">Little Lemon</h1>
                <h2 className="location">Chicago</h2>
                <div style={{ width: '40%'}}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </div>
            </div>
            <div className='restro-images'>
                <img className='restaurant-img' src={restroImage} alt='restaurant'/>
                <img className='restaurant-chef-img' src={restroChefImage} alt='restaurant-chef'/>
            </div>
        </div>
    </section>);
}