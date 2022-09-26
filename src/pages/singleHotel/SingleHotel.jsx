import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import useFetch from '../../hooks/useFetch';
import "./SingleHotel.css"

export default function SingleHotel() {
    const location = useLocation()
    console.log(location)
    const hotel_id = location.pathname.split("/"[2])
    console.log(hotel_id)
    const [slideNum, setSlideNum] = useState(0)
    const [openImage, setOpenImage] = useState(false)

    const { data, loading } = useFetch(`/api/hotels/${hotel_id}`);

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
        {loading ? (
              <Spinner animation="border" variant="dark" />
            ) : 
        <div className="single-hotel">
            <div className="container">
                <div className="row">
                    {openImage && <div className="slider">
                        <FontAwesomeIcon className='close-btn' icon={faCircleXmark} onClick={()=> setOpenImage(false)} />
                        <FontAwesomeIcon className='arrow' icon={faCircleArrowLeft} onClick={()=> handleMove("l")} />
                        <div className="slider-wrapper">
                            <img src={data.imgs} alt="" className='img-fluid' />
                        </div>
                        <FontAwesomeIcon className='arrow' icon={faCircleArrowRight} onClick={()=> handleMove("r")} />
                    </div>}
                    <div className="col-md-9 col-sm-12">
                        <h2 className="single-hotel-header">{data.name}</h2>
                        <p className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> {" "}
                        {data.address} </p>
                        <p className="distance">Excellent location - {data.distance}m from center</p>
                        <p className="promo">Book a stay with &#8358;{data.cheapestPrice} at this {data.type} and get a free airport taxi</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <button className='btn'>Reserve or Book Now!</button>
                    </div>
                    <div className="row mb-4">
                        {images.map((image, index) => (
                            <div className="col-md-4 col-sm-12 my-3" key={image.id}>
                                <img 
                                    src={data.imgs[index]} 
                                    alt=""
                                    className='img-fluid'
                                    onClick={()=>handleOpen(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotel-about col-md-8 col-sm-12">
                        <h3 className="info">{data.title}</h3>
                        <p className="more-info">
                            {data.desc}
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12 aside">
                        <h4 className="perfect">Perfect for a 9 night stay!</h4>
                        <p className="text">{data.name} - {data.title}</p>
                        <h4 className="amount">&#8358;{data.cheapestPrice * 9} <span>(9 nights)</span></h4>
                        <button className='btn'>Reserve or Book Now!</button>
                    </div>
                </div>
            </div> 
        </div>}
        <MailList />
        <Footer />
    </>
  )
}
