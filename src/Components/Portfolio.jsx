import React, { useState } from 'react';
import img1 from '../assets/port1.png';
import img2 from '../assets/port2.png';
import img3 from '../assets/port3.png';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const openPopup = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
    setCurrentImage('');
  };
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <>
      <div className="portfolio-section mt-3">
        <div className="mb-4">
          <div className="pt-4">
            <div className="text-center pt-4">
              <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className='line me-3' style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
                <i className='fa-solid fa-star'></i>
                <div className='line ms-3' style={{ backgroundColor: 'rgb(44, 62, 80)' }}></div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row g-5">
                {images.map((img, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded-3 overflow-hidden position-relative" onClick={() => openPopup(img)}>
                      <img src={img} alt={`Image${index + 1}`} className='w-100 rounded-3' />
                      <div className="layer__image position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                        <i className='text-white fa-solid fa-plus fa-6x'></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="popup" onClick={closePopup}>
          <span className="close" onClick={closePopup}>&times;</span>
          <img src={currentImage} alt="Popup" className='popup-image' onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
