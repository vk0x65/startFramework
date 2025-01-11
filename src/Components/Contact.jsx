import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="portfolio-section mt-3">
        <div className="mb-4 container">
          <div className="pt-4">
            <div className="text-center pt-4">
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>conatct section</h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className='line me-3' style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
                <i className='fa-solid fa-star'></i>
                <div className='line ms-3' style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
              </div>
            </div>
          </div>
          <form className='w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched'>
            <input id="userName" type="text" placeholder="User Name" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"></input>
            <input id="userAge" type="number" placeholder="User Age" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"></input>
            <input id="userEmail" type="email" placeholder="User Email" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"></input>
            <input id="userPassword" type="password" placeholder="User Password" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"></input>
            <button className='btn mt-4 text-white' style={{ backgroundColor: '#1abc9c' }}> Send Message </button>
          </form>
        </div>
      </div>
    </>
  )
}
