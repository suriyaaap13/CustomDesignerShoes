import React from 'react'

export default function Store() {
  return (
    <>
      <div className='row px-4 mw-100'>
        {/* Section 1 */}
        <div className='col-md-2 shadow p-3 mb-3 bg-white rounded'>
          {/* Filter and Filter Icon */}
          <div className='d-flex justify-content-between align-items-enter'>
            <div className='fs-3'>
              Filter
            </div>
            {/* Filter Logo */}
            <div>
              <i className="fa-solid fa-filter fa-2x"></i>
            </div>
          </div>
          {/* Cost */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Cost
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rs. 1500-4000
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Rs. 4001-7000
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Rs. 7001+
                  </label>
              </div>
            </div>
          </div>
          {/* Color */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Color
              </div>
              {/* colors */}
              <div className='d-flex justify-content-between py-3 w-50'>
                {/* Individual color */}
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "cyan"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "blue"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "yellow"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "green"}}></div>
              </div>
            </div>
          </div>
          {/* Design */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Design Templates
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    2
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    3
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    3+
                  </label>
              </div>
            </div>
          </div>
          {/* Type */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Type
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Loafers
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Sneakers
                  </label>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className='col-md-8'>
            {/* Heading */} 
            <div className='shadow p-5 mb-3 bg-light rounded'>
              {/* shop and Shop Icon */}
              <div className='d-flex justify-content-between align-items-enter'>
                <div className='fs-3'>
                  Shop
                </div>
                {/* Shop Logo */}
                <div className='text-dark'>
                <i class="fa-solid fa-shop fa-2x"></i>
                </div>
              </div>
              {/* card Container */}
              <div className='py-4 w-100 d-flex justify-content-between'>
                {/* Card */}
                <div className="card" style={{width: "14rem"}}>
                  {/* Card Image */}
                  <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                  <div className="card-body">
                  {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                      <small>Rs. 2000/-</small>
                      <small>ratings</small>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card" style={{width: "14rem"}}>
                  {/* Card Image */}
                  <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                  <div className="card-body">
                  {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                      <small>Rs. 2000/-</small>
                      <small>ratings</small>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card" style={{width: "14rem"}}>
                  {/* Card Image */}
                  <img className="card-img-top" src={require('../shoe2.png')} alt="Card image cap"/>
                  <div className="card-body">
                  {/* Name of the Shoe */}
                    <h5 className='card-title'>
                        KSL 01
                    </h5>
                    {/* Cost and ratings */}
                    <div className='card-text d-flex justify-content-between align-items-center'>
                      <small>Rs. 2000/-</small>
                      <small>ratings</small>
                    </div>
                  </div>
                </div>
                
              </div>
              
              
              
              {/* Card title */}
              {/* Card price and ratings */}
            </div>
        </div>
        {/* Section 3 */}
        <div className='col-md-2 shadow p-3 mb-3 bg-white rounded px-4'>
          <div className=' '>
            {/* Cart and Cart Icon */}
            <div className='d-flex justify-content-between align-items-enter'>
              <div className='fs-3'>
                Cart
              </div>
              {/* Cart Logo */}
              <div>
                <i className="fa-solid fa-cart-shopping fa-2x"></i>
              </div>
            </div>
            {/* Inside cart */}
            <div className='w-100 py-5 my-5'>
              <div className='d-flex align-items-center justify-content-center my-5 py-5'>
                What's stopping you, designer?
              </div>
            </div>
            {/* Footer of Cart */}
            <div className='d-flex align-items-center justify-content-center w-100'>
              <div className='btn btn-light'>
                  order now
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      
      
    </>
  )
}
