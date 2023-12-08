import React from "react";

export default function Ccarousal() {
  return (
    <>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
        style={{ objectFit: "contain !important" }}
      >
        <div className='carousel-inner' id='carousel'>
          <div className='carousal-caption ' style={{ zIndex: "0" }}>
            <form className='d-flex'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-success' type='submit'>
                Search
              </button>
            </form>
          </div>
          <div className='carousel-item active'>
            <img
              src='https://source.unsplash.com/random/900×700/?white'
              className='d-block w-100'
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://source.unsplash.com/random/900×700/?red'
              className='d-block w-100'
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://source.unsplash.com/random/900×700/?yellow'
              className='d-block w-100'
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}
