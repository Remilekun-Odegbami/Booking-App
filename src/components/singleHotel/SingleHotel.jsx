import React from 'react';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import MailList from '../mailList/MailList';
import Navbar from '../navbar/Navbar';
import "./SingleHotel.css"

export default function SingleHotel() {
  return (
    <>        
      <Navbar />
      <Header type="list" />
      <div className="container single-hotel">
        <div className="row">
            <div className="col-md-9 col-sm-12">
                <h2 className="single-hotel-header">Tower Street Appartments</h2>
                <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {" "}
                5 Tafawa Balewa, Plateau State </p>
                <p className="distance">Excellent location - 500m from center</p>
                <p className="promo">Book a stay with N150,000 at this property and get a free airport taxi</p>
            </div>
            <div className="col-md-3 col-sm-12">
                <button className='btn'>Reserve or Book Now!</button>
            </div>
            <div className="gallery row">
                <div className="col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                </div>
                <div className="col-md-4 col-sm-12 my-4">
                    <img src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="room" className='img-fluid ' />
                </div>
            </div>
            <div className="hotel-about col-md-9 col-sm-12">
                <h3 className="info">Stay in the heart of Plateau</h3>
                <p className="more-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aperiam reiciendis! Alias perferendis adipisci sit, quod voluptatibus illum non eaque ratione maiores. Suscipit modi natus rem recusandae praesentium perferendis dignissimos voluptate repudiandae soluta delectus, omnis necessitatibus voluptas iste unde dolore vel quia molestias assumenda ut ipsam officiis numquam nulla cum! Omnis possimus ipsa quae, odit sapiente harum consequatur perspiciatis! Saepe ullam quisquam inventore, ipsam repudiandae dolorum facilis, voluptatum fugiat tempore incidunt id ea vel. Eligendi obcaecati mollitia accusantium recusandae magnam consequatur! At, vero dicta. Facere voluptatibus dolorum sapiente vel, impedit, veritatis aspernatur totam, explicabo culpa corrupti vitae! Cum, amet suscipit nulla sequi quae nesciunt maxime quos omnis eaque? Voluptatibus incidunt architecto excepturi dolore, sunt, facere voluptatum, quod tempore perferendis id voluptate ab ratione eos quis inventore culpa ducimus alias! Maiores voluptas numquam accusamus.
                </p>
            </div>
            <div className="col-md-3 col-sm-12 aside">
                <h5 className="perfect">Perfect for a 9-night stay!</h5>
                <p className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui asperiores dignissimos, accusantium porro hic id!</p>
                <h4 className="amount">&#8358;400,000 <span>(7 nights)</span></h4>
                <button className='btn'>Reserve or Book Now!</button>
            </div>
        </div>
      </div>      
        <MailList />
        <Footer />
    </>
  )
}
