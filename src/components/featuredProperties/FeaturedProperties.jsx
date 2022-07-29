import React from 'react'
import './FeaturedProperties.css'

function FeaturedProperties() {
  return (
    <div className='featured-properties'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Lagos</span>
                        <span className="fp-price">Starting from &#8358;100,000</span>
                        <div className="fp-rating">
                            <button className='btn'> 9.5</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Oyo</span>
                        <span className="fp-price">Starting from &#8358;50,000</span>
                        <div className="fp-rating">
                            <button className='btn'>7.3</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Abuja</span>
                        <span className="fp-price">Starting from &#8358;70,000</span>
                        <div className="fp-rating">
                            <button className='btn'>9.0</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Port Harcourt</span>
                        <span className="fp-price">Starting from &#8358;50,000</span>
                        <div className="fp-rating">
                            <button className='btn'>7.2</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Calabar</span>
                        <span className="fp-price">Starting from &#8358;40,000</span>
                        <div className="fp-rating">
                            <button className='btn'>8.7</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties