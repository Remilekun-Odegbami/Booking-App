import React from 'react';
import './SearchItem.css'

export default function SearchItem() {
  return (
    <>
    <div className='items d-lg-flex col-12'>
        <div className="col-lg-4 col-md-12">
        <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid' />
        </div>
        <div className="col-lg-8 col-md-12">
            <div className="d-lg-flex justify-content-between">
                <h4 className="items-header">Tower Street Apartments</h4>
                <div className="d-flex justify-content-between">
                    <h6 className="text-rating">Excellent</h6>
                    <p className="num-rating ml-lg-5">8.9</p>
                </div>
            </div>
            <div className="row detailed-info">
                <p className="location">500m from center</p>
                <p className="free-taxi bg-success">Free airport taxi</p>
                <p className="info"><b>Studio Apartment with Air conditioning</b></p>
                <div className="d-flex justify-content-between">
                    <p className="more-info">Entire studio. 1 bathroom. 21m<sup>2</sup> 1 full bed</p>
                        <p className="price">&#8358;50,000</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="cancel text-success "> <b>Free Cancellation</b></p>
                    <p className="includes">Includes taxes and fees</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="cancel-later text-success"><small>You can cancel later so lock in this great price today!</small></p>
                    <button className="btn">See availability</button>
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
}
