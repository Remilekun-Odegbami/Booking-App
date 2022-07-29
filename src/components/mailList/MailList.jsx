import React from 'react';
import './MailList.css'

export default function MailList() {
  return (
    <section className='mail'>
        <div className="container-fluid">
          <div className="row text-center">
              <h2 className="mail-title">Save Time and Money</h2>
              <label htmlFor='mail' className="mail-desc">Sign up to get the best deals</label>
              <div className="mail-input-container">
                  <input type="text" name="mail" id="mail" placeholder='Please enter your email address' />
                  <button type="submit" className='btn'>Subscribe</button>
              </div>
          </div>
        </div>
    </section>
  )
}
