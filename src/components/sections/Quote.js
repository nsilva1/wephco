import React from 'react'

const Quote = () => {
  return (
    <div class=" testimonial-padding">
        <div class="container">
            {/* <!-- Testimonial contents --> */}
            <div class="row d-flex justify-content-center">
                <div class="col-xl-8 col-lg-8 col-md-10">
                    <div class="h1-testimonial-active dot-style">
                        {/* <!-- Single Testimonial --> */}
                        <div class="single-testimonial text-center">
                            {/* <!-- Testimonial Content --> */}
                            <div class="testimonial-caption ">
                                <div class="testimonial-top-cap">
                                    <img src={require('../assets/img/gallery/testi-logo.png').default} alt="" />
                                    <p>
                                    Over the years, in this fast changing economy, Weph.co has evolved and transcend beyond all odds in the Exterior & Interior Decoration industry. We believe in bringing your dreams into reality.
                                    </p>
                                </div>
                                {/* <!-- founder --> */}
                                <div class="testimonial-founder  ">
                                    <div class="founder-img">
                                        <span><strong>Wisdom Nwachukwu</strong>   -   Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Testimonial --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote;
