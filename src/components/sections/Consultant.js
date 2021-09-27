import React from 'react'
import { Link } from 'react-router-dom'

const Consultant = () => {
  return (
    <section class="wantToWork-area w-padding2">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <h2>Are you Searching For a First-Class Consultant?</h2>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3">
                    <Link to='/contact' className="btn btn-black f-right">Contact Us</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Consultant;
