import React from 'react'
// <i class="fa-solid fa-angle-left"></i>
export default function Design(props) {
  return (
    <>
    <div className='col-md-10'>
      <div className='shadow p-4 mb-3 bg-light rounded'>
          {/* shop and Shop Icon */}
          <div className='d-flex justify-content-start align-items-enter'>
            <div className='fs-4 mx-3' onClick={props.tab} style={{cursor: "pointer"}}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className='fs-4'>
              Your Design Space
            </div>
          </div>
          
          <div className='py-4 px-4 row'>
            <div className='col-8'> 
              {/* Product Image */}
              <img src={require('../shoes/shoe1.png')} alt='Product Image'/>
            </div>
            <div className='col-4 p-2'>
              {/* Product Deatails */}
              <div className='py-2'>
                <div className='fs-3'>
                  KSL  01
                </div>
                <small>
                  by KICKUP
                </small>
              </div> 
              {/* Finacial Details */}
              <div className='py-3'>
                <div className='fs-5'>
                  Rs.2000/-
                </div>
                <small>
                  Get an exculsive 20% off shopping with HDFC Bank
                </small>
              </div>
              {/* Product Design Choosing section */}
              <div>
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Front & Back
                  </div>
                  <div className='col-3 d-flex justify-content-between'>
                    <div className='border border-dark' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "white"}}></div>
                    <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                  </div>
                </div>
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Middle
                  </div>
                  <div className='col-3 d-flex justify-content-between'>
                    <div className='border border-dark' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "white"}}></div>
                    <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                  </div>
                </div>
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Sole
                  </div>
                  <div className='col-3 d-flex justify-content-between'>
                    <div className='border border-dark' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "white"}}></div>
                    <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                  </div>
                </div>
                <div className='row py-2'>
                  <div className='col-5 fs-5'>
                    Front & Back
                  </div>
                  <div className='col-3 d-flex justify-content-between'>
                    <div className='border border-dark' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "white"}}></div>
                    <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                  </div>
                </div>
                <div className=' py-2'>
                  <div className='col-5 fs-5 py-2'>
                    Size
                  </div>
                  <div className='col-7 py-2 d-flex justify-content-between'>
                    <div className='border border-dark d-flex justify-content-center align-items-center fw-bold' style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>7</div>
                    <div className='border border-dark d-flex justify-content-center align-items-center fw-bold' style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>8</div>
                    <div className='border border-dark d-flex justify-content-center align-items-center fw-bold' style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>9</div>
                    <div className='border border-dark d-flex justify-content-center align-items-center fw-bold' style={{width: "2rem", height: "2rem", backgroundColor: "white"}}>10</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Price */}
          {/* Offers by Bank */}
          {/* Front and Back */}
          {/* Middle */}
          {/* Size */}
      </div>
      {/* Add to cart Button */}
    </div>
      
    </>
  )
}
