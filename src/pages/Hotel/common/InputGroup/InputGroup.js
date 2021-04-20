import React from 'react';
import './input-group.css';

const InputGroup = () => {
  return (
    <section className="booking">
      <div className="container">
        <form action="" className="form book-form">
          <div className="input-group">
            <label className="input-label" style={{color:'black'}}>Region in Abuja</label>
            <input type="text" className="input" id="destination"></input>
          </div>
          <div className="input-group">
            <label className="input-label" style={{color:'black'}}>Check in</label>
            <input type="date" className="input" id="check-in"></input>
          </div>
          <div className="input-group">
            <label className="input-label" style={{color:'black'}}>Check out</label>
            <input type="date" className="input" id="check-out" />
          </div>
          <div className="input-group">
            <label className="input-label" style={{color:'black'}}>Adults</label>
            <select className="options" id="adults">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>
          <div className="input-group">
            <label className="input-label" style={{color:'black'}}>Children</label>
            <select className="options" id="children">
              <option value="0">0</option>
              <option value="0">1</option>
              <option value="0">2</option>
              <option value="0">3</option>
              <option value="0">4</option>
              <option value="0">5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-gradient">Search</button>
        </form>
      </div>
    </section>
  )
}

export default InputGroup;