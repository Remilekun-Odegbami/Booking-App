import React from 'react'
import { Header } from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar';
import './List.css';

export default function List() {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="container mt-4">
        <div className="list-wrapper">
          <div className="list-search col-md-4">
            <h1 className="list-search-title">Search</h1>
            <form action="">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <input
                    type="name"
                    className="form-control"
                    placeholder="destination"
                    name="destination"
                    id='destination'
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="check-in-date">Check In Date</label>
                  <input
                    type="Date"
                    className="form-control"
                    placeholder="check-in-date"
                    name="check-in-date"
                    id="check-in-date"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="list-result col-md-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempora nisi placeat officiis esse nihil error dicta ut. Odit velit alias mollitia tempora facere, recusandae sed saepe molestiae neque nobis fugit quisquam necessitatibus deleniti laboriosam! Quam maxime nesciunt, sed eum minima inventore facilis temporibus deserunt, sit itaque laborum labore praesentium sequi vitae, commodi aperiam! Adipisci, deserunt, sapiente distinctio sit corrupti voluptate incidunt fugiat deleniti non tenetur error repellat eum aspernatur ea. Fugit nesciunt obcaecati nisi blanditiis dolore aliquam qui, distinctio nulla perferendis tempore, facilis rerum amet laboriosam sapiente harum in non. Omnis a veniam maiores necessitatibus eligendi laborum, numquam beatae! lorem200</div>
        </div>
      </div>
    </div>
  )
}
