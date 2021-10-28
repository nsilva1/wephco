import React, { useState } from 'react'
import Navb from '../../common/Navigation'
import How from './HowItWorks'
import { useHistory } from 'react-router-dom'

const Home = () => {

  var history = useHistory();

  const [currency, setCurrency] = useState('dollar');
  const [amount, setAmount] = useState(0);

  const selectChange = (event) => {
    setCurrency(event.target.value);
  }

  const changeAmount = (event) => {
    setAmount(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    const amountToChange = amount;
    if(amountToChange < 10){
      alert('Amount is too low');
      return;
    }
    // save amount to context
    history.push('/transaction-details');
  }

  return (
    <>
    <Navb />
    <div className='p-3 text-center fx-background'>
      <div className="title">
        <div className="mt-5 p-5">
          <h3 className="text-white">Wephco FX</h3>
        </div>
        <div className="mt-5">
          <div className="container">
          <form>
          <div className="row justify-content-around">
            <div className="col-md-4">
            <div class="mb-3">
              <label  className="form-label">Send To</label>
              <input type="text" className="form-control" value='Nigeria' disabled />
            </div>
            </div>
            <div className="col-md-4">
              <label className="form-label">Select Currency</label>
              <select className="form-select" aria-label="Currency" value={currency} onChange={selectChange}>
                <option value='dollar'>US Dollar</option>
                <option value="euro">Euro</option>
                <option value="pounds">British Pound</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className='form-label'>Amount</label>
              <input type='number' className='form-control' value={amount} onChange={changeAmount} />
              <span className='text-muted'>*minimum of $10 per transaction.</span>
            </div>
          </div>
          </form>

          <div className="mt-3 mb-3">
            <div className="text-center">
              <div className="">
              <button type='button' className='btn btn-warning btn-block' onClick={submit}>CONTINUE</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h4> <i className='bi bi-check-circle' /> </h4>
              <p className="text-white">Safe and reliable transfers</p>
            </div>
            <div className="col-md-6">
              <h4> <i className='bi bi-check-circle' /> </h4>
              <p className="text-white">Great rates and low fees</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
    <How />
    </>
  )
}

export default Home;
