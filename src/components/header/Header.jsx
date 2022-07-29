import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faPlane, faCar, faTaxi, faTree, faCalendarDays, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import  {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import "./Header.css"

export const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState("")
    const navigate = useNavigate()

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOption, setOpenOption] = useState(false)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions( prev => {return {
            ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1, 
        }})
    }

    const handleSearch = () => {
        navigate('/hotels', { state: {destination, date, options}})
    }

  return (
    <div className='header'>
        <div className={type === "list" ? "container header-container list-mode" : "container header-container"}>
            <div className="row">
                <div className="header-list d-flex justify-content-between">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span><a href="/singlehotel">Stays</a></span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTree} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                <div className="header-text mt-5">
                    <h1 className="header-title">A Lifetime of Discounts? It's Genius!!!</h1>
                    <p className="header-desc">Get rewarded for your travels. Unlock instant savings of 10% or more with a fee hotel account</p>
                    <a href="/login" className='btn mt-3'> Sign In</a>                     
                </div>

                { type !== "list" &&
                <div className="header-search-items container">
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faTaxi} className="icon" />
                        <input type="search" name="search" placeholder='Where are you going to?' className='header-search-text'
                        onChange={e => setDestination(e.target.value)}
                         />
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="icon" />
                        <span className="header-search-text" onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange 
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                        <span className="header-search-text" onClick={() => setOpenOption(!openOption)}> {`${options.adult} adult . ${options.children} children . ${options.room} room `} </span>
                        {openOption && <div className="options">
                            <div className="option-item">
                                <span className="option-text">Adult</span>
                                <div className="option-counter d-flex">
                                    <button disabled={options.adult <= 1} className='counter btn' onClick={() => handleOption("adult", "decrease")}> - </button>
                                    <div className="counter-number">{options.adult}</div>
                                    <button className='counter btn' onClick={() => handleOption("adult", "increase")}> + </button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="option-text">Children</span>
                                <div className="option-counter d-flex">
                                    <button disabled={options.children <= 0} className='counter btn' onClick={() => handleOption("children", "decrease")}> - </button>
                                    <div className="counter-number">{options.children}</div>
                                    <button className='counter btn' onClick={() => handleOption("children", "increase")}> + </button>
                                </div>
                            </div>
                            <div className="option-item">
                                <span className="option-text">Room</span>
                                <div className="option-counter d-flex">
                                    <button disabled={options.room <= 1} className='counter btn' onClick={() => handleOption("room", "decrease")}> - </button>
                                    <div className="counter-number">{options.room}</div>
                                    <button className='counter btn' onClick={() => handleOption("room", "increase")}> + </button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="header-search-item">
                        <button 
                        type="submit"
                        className='btn search-btn'
                        onClick={handleSearch}
                        >Search</button>
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}
