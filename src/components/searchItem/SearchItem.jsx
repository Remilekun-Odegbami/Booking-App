import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";

export default function SearchItem({item}) {
  const API = "localhost:4000/api"
  return (
    <>
    {  
      <div className="items col-12">
        <div className="col-lg-4 col-md-12">
          <img src={item?.imgs[0]} alt="room" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="d-lg-flex justify-content-between">
            <h4 className="items-header">{item?.name}</h4>
            <h4 className="more-info">{item?.address}</h4>
            {item?.rating && (
              <div className="d-flex justify-content-between">
                <h6 className="text-rating">Excellent</h6>
                <p className="num-rating ml-lg-5">{item?.rating}</p>
              </div>
            )}
          </div>
          <div className="row detailed-info">
            <p className="location">{item?.distance} from center</p>
            <p className="free-taxi bg-success">Free airport taxi</p>
            <p className="info">
              <b>Studio Apartment with Air conditioning</b>
            </p>
            <div className="d-flex justify-content-between">
              <p className="more-info">{item?.desc}</p>
              <p className="price">&#8358;{item?.cheapestPrice}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="cancel text-success">
                {" "}
                <b>Free Cancellation</b>
              </p>
              <p className="includes">Includes taxes and fees</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="cancel-later text-success">
                <small>
                  You can cancel later so lock in this great price today!
                </small>
              </p>
              <Link to={`/hotels/${item?._id}`}>
                <button className="btn">See availability</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
     }
    </>
  );
}
