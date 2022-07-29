import React from 'react'
import './FeaturedProperties.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons";

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
                        <span className="fp-price">Starting from $50</span>
                        <div className="fp-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            <button className='btn'> 8.9</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Lagos</span>
                        <span className="fp-price">Starting from $50</span>
                        <div className="fp-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            <button className='btn'>8.9</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Lagos</span>
                        <span className="fp-price">Starting from $50</span>
                        <div className="fp-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            <button className='btn'>8.9</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Lagos</span>
                        <span className="fp-price">Starting from $50</span>
                        <div className="fp-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            <button className='btn'>8.9</button>
                            <span> Excellent</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                    <div className="row">
                        <span className="fp-name">Lorem ipsum dolor sit</span>
                        <span className="fp-city">Lagos</span>
                        <span className="fp-price">Starting from $50</span>
                        <div className="fp-rating">
                            <FontAwesomeIcon icon={faStar} className="icon" />
                            <button className='btn'>8.9</button>
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