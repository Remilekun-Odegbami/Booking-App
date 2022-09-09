import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Spinner } from "react-bootstrap";
import './Featured.css';

export const Featured = () => {
    const {data, loading, error} = useFetch("/api/hotels/countByCity?cities=Jos,Abuja,Lagos");


  return (
    <section className="featured">
        <div className='container'>
            {loading ? (
                <Spinner animation="border" variant="dark" />
            ) :
            (<><div className="row mt-5 all-featured">
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/4503721/pexels-photo-4503721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Jos</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/1650805/pexels-photo-1650805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Abuja</h1>
                            <h2>{data[1]} properties </h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/1650828/pexels-photo-1650828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Lagos</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/4503910/pexels-photo-4503910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>PortHarcourt</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Oyo</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12 my-2">
                        <img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Calabar</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
            </div></>)}
        </div>
    </section>
  )
}
