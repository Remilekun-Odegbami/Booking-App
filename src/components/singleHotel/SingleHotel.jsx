import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import MailList from '../mailList/MailList';
import Navbar from '../navbar/Navbar';
import "./SingleHotel.css"

export default function SingleHotel() {
    const [slideNum, setSlideNum] = useState(0)
    const [openImage, setOpenImage] = useState(false)

    const images = [
        {
            src:"https://images.pexels.com/photos/271625/pexels-photo-271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 1
        },
        {
            src:"https://images.pexels.com/photos/271626/pexels-photo-271626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 2
        },
        {
            src:"https://images.pexels.com/photos/271627/pexels-photo-271627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 3
        },
        {
            src:"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600",
            id: 4
        },
        {
            src:"https://images.pexels.com/photos/338502/pexels-photo-338502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 5
        },
        {
            src:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            id: 6
        }
    ];

    const handleOpen = (index) => {
        setSlideNum(index)
        setOpenImage(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction==="l") {
            newSlideNumber = slideNum === 0 ? 5 : slideNum - 1;
        } else {
            newSlideNumber = slideNum === 5 ? 0 : slideNum + 1;
        }

        setSlideNum(newSlideNumber)
    }

  return (
    <>        
      <Navbar />
      <Header type="list" />
      <div className="container single-hotel">
        <div className="row">
            {openImage && <div className="slider">
                <FontAwesomeIcon className='close-btn' icon={faCircleXmark} onClick={()=> setOpenImage(false)} />
                <FontAwesomeIcon className='arrow' icon={faCircleArrowLeft} onClick={()=> handleMove("l")} />
                <div className="slider-wrapper">
                    <img src={images[slideNum].src} alt="" className='img-fluid' />
                </div>
                <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} onClick={()=> handleMove("r")} />
            </div>}
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
            <div className="row mb-4">
                {images.map((image, index) => (
                    <div className="col-md-4 col-sm-12 my-3" key={image.id}>
                        <img 
                            src={image.src} 
                            alt=""
                            className='img-fluid'
                            onClick={()=>handleOpen(index)}
                        />
                    </div>
                ))}
            </div>
            <div className="hotel-about col-md-8 col-sm-12">
                <h3 className="info">Stay in the heart of Plateau</h3>
                <p className="more-info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aperiam reiciendis! Alias perferendis adipisci sit, quod voluptatibus illum non eaque ratione maiores. Suscipit modi natus rem recusandae praesentium perferendis dignissimos voluptate repudiandae soluta delectus, omnis necessitatibus voluptas iste unde dolore vel quia molestias assumenda ut ipsam officiis numquam nulla cum! Omnis possimus ipsa quae, odit sapiente harum consequatur perspiciatis! Saepe ullam quisquam inventore, ipsam repudiandae dolorum facilis, voluptatum fugiat tempore incidunt id ea vel. Eligendi obcaecati mollitia accusantium recusandae magnam consequatur! At, vero dicta. Facere voluptatibus dolorum sapiente vel, impedit, veritatis aspernatur totam, explicabo culpa corrupti vitae! Cum, amet suscipit nulla sequi quae nesciunt maxime quos omnis eaque? Voluptatibus incidunt architecto excepturi dolore, sunt, facere voluptatum, quod tempore perferendis id voluptate ab ratione eos quis inventore culpa ducimus alias! Maiores voluptas numquam accusamus.
                </p>
            </div>
            <div className="col-md-4 col-sm-12 aside">
                <h4 className="perfect">Perfect for a 9 night stay!</h4>
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
