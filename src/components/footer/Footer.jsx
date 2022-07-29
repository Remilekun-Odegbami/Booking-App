import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
      <section className="footer mt-4">
        <div className="container">
            <div className="row footer-lists">
                <div className=" footer-list col-lg-4 col-md-3 col-sm-12">
                    <ul>
                        <li className='footer-list-item logo'><a href="#">Home</a></li>
                    </ul>
                </div>
                <div className=" footer-list col-lg-2 col-md-3 col-sm-12">
                    <ul>
                        <li className="footer-list-item"><a href="#">Countries</a></li>
                        <li className="footer-list-item"><a href="#">Regions</a></li>
                        <li className="footer-list-item"><a href="#">Cities</a></li>
                        <li className="footer-list-item"><a href="#">Districts</a></li>
                        <li className="footer-list-item"><a href="#">Airports</a></li>
                        <li className="footer-list-item"><a href="#">Hotels</a></li>
                    </ul>
                </div>
                <div className=" footer-list col-lg-2 col-md-3 col-sm-12">
                    <ul>
                        <li className="footer-list-item"><a href="#">Countries</a></li>
                        <li className="footer-list-item"><a href="#">Regions</a></li>
                        <li className="footer-list-item"><a href="#">Cities</a></li>
                        <li className="footer-list-item"><a href="#">Districts</a></li>
                        <li className="footer-list-item"><a href="#">Airports</a></li>
                        <li className="footer-list-item"><a href="#">Hotels</a></li>
                    </ul>
                </div>
                <div className=" footer-list col-lg-2 col-md-3 col-sm-12">
                    <ul>
                        <li className="footer-list-item"><a href="#">Countries</a></li>
                        <li className="footer-list-item"><a href="#">Regions</a></li>
                        <li className="footer-list-item"><a href="#">Cities</a></li>
                        <li className="footer-list-item"><a href="#">Districts</a></li>
                        <li className="footer-list-item"><a href="#">Airports</a></li>
                        <li className="footer-list-item"><a href="#">Hotels</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-colophone">
            <p className="footer-text d-flex justify-content-center">Copyright &copy; 2022 Hotels </p>
                <ul className='socials d-flex justify-content-center'>
                    <li className="footer-list-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="footer-list-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li className="footer-list-item"><a href="#"></a></li>
                    <li className="footer-list-item"><a href="#"><i className="fa fa-telegram" aria-hidden="true"></i></a></li>
                    <li className="footer-list-item"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>                      
            </div>
      </section>
  )
}
