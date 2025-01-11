import React from 'react'
import error from '../assets/404.png'
export default function NotFound() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 56px - 60px)'}}>
        <img src={error} alt="404" className="img-fluid w-50"/>
      </div>
    </>
  )
}
