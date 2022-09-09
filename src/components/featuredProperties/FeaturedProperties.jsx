import React from 'react';
import useFetch from '../../hooks/useFetch';
import { NavItem, Spinner } from "react-bootstrap";
import './FeaturedProperties.css';

function FeaturedProperties() {
    const {data, loading, error} = useFetch("/api/hotels?featured=true&limit=4");

    
  return (
    <div className='featured-properties'>
        <div className='container'>
            <div className="row">
            {loading ? (
                <Spinner animation="border" variant="dark" />
            ) : 
            (<>
            {data.map((item) => (
                    <div className="col-lg-4 col-md-4 col-sm-12 my-4" key={item._id}>
                        {item.imgs && <img src={item.imgs} alt="room" className='img-fluid ' />}
                        <div className="row">
                            <span className="fp-name">{item?.name}</span>
                            <span className="fp-type">{item?.type}</span>
                            <span className="fp-city">{item?.address}</span>
                            <span className="fp-title">{item?.title}</span>
                            <span className="fp-price">Starting from &#8358;{item?.cheapestPrice}</span>
                            {item.rating && <div className="fp-rating">
                                <button className='btn'> {item.rating}</button>
                                <span> Excellent</span>
                            </div>}
                        </div>
                    </div>
            ))}
            </>)}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties