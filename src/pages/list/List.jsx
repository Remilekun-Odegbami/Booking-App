import React, {useState} from 'react'
import { Header } from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar';
import './List.css';
import { useLocation } from 'react-router-dom';
import  {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import SearchItem from '../../components/searchItem/SearchItem';

export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container mt-4">
        <div className="row list-wrapper">
          <div className="list-search col-md-4 col-sm-12">
            <h1 className="list-search-title">Search</h1>
            <form action="">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="destination">Destination: </label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder={destination}
                    name="destination"
                    id='destination'
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="check-in-date">Check In Date: </label>
                    <p 
                    className='check-in'
                    onClick={()=>setOpenDate(!openDate)}
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</p>
                    {openDate && (<DateRange 
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()} // this stops the users from picking a past date.
                      ranges={date} // this allows a user pick a date range
                    />)}
                </div>
              </div>
                <h5>Your search options:</h5>
              <div className="options-group">
                <div className="form-row">
                  <div className="form-group">                    
                  <label htmlFor="min"> Min price <small>(per night)</small> </label>
                    <input type="number" name="min" id="min" className='options-input' />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">                    
                    <label htmlFor="max"> Max price <small>(per night)</small> </label>
                    <input type="number" name="max" id="max" className='options-input' />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">                    
                    <label htmlFor="room"> Number of Rooms </label>
                    <input type="number" min={1} name="room" id="room" className='options-input' placeholder={options.room} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">                    
                    <label htmlFor="adult"> Number of Adults </label>
                    <input type="number" min={1} name="adult" id="adult" className='options-input' placeholder={options.adult} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">                    
                    <label htmlFor="children"> Number of Children </label>
                    <input type="number" min={0} name="children" id="children" className='options-input' placeholder={options.children} />
                  </div>
                </div>
              </div>
              <button className='btn'>Search</button>
            </form>
          </div>
          <div className="list-result col-md-8 col-sm-12">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}
