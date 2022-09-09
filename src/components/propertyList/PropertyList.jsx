import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Spinner } from "react-bootstrap";
import './PropertyList.css'

export const PropertyList = () => {
    const {data, loading, error} = useFetch("/api/hotels/countByType");
    
    const images = [
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

  return (
    <section className='prop-list'>
        <div className="container">
            <div className="row">
        {loading ? (
                <Spinner animation="border" variant="dark" />
            ) : (
            <>
            {data && images.map((img,i) => (
            <div className="col-lg-3 col-md-4 col-sm-12" key={i}>
                <img src={img} alt="hotel" className='img-fluid' />
                <div className="prop-list-titles">
                    <h1>{data[i]?.type}</h1>
                    <p>{data[i]?.count} {data[i]?.type}</p>
                </div>
            </div> 
            ))}
            </>
            )}  
            </div>
        </div>
    </section>
  )
}
