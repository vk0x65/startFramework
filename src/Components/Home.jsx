import React from 'react'
import avatar from '../assets/avatar.svg'
export default function Home() {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center text-white'>
      <div className="text-center">
        <img src={avatar} alt="Avatar" className='mb-3'/>
        <div className='text-center pt-4'>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>START FRAMEWORK</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3'></div>
            <i className='fa-solid fa-star'></i>
            <div className='line ms-3'></div>
          </div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  )
}
