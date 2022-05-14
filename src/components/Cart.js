import React from 'react'

export default function Cart() {
  return (
    <>
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
                What's stopping you?
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
    </>
  )
}
