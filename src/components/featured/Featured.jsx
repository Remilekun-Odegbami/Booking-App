import React from 'react'
import './Featured.css'

export const Featured = () => {
  return (
    <section className="featured">
        <div className='container'>
            <div className="row mt-5 all-featured">
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12">
                        <img src="https://images.pexels.com/photos/4503721/pexels-photo-4503721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Dublin</h1>
                            <h2>123 properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12">
                        <img src="https://images.pexels.com/photos/1650805/pexels-photo-1650805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Dublin</h1>
                            <h2>123 properties</h2>
                        </div>
                    </div>
                    <div className="featured-item col-lg-4 col-md-4 col-sm-12">
                        <img src="https://images.pexels.com/photos/1650828/pexels-photo-1650828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dublin" className='dublin img-fluid' />
                        <div className="featured-title">
                            <h1>Dublin</h1>
                            <h2>123 properties</h2>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}
