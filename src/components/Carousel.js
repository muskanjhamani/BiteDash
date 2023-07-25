import React from 'react'

export default function Carousel() {
  return (
    <div>
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://source.unsplash.com/random/900x700/?burger" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src="https://source.unsplash.com/random/900x700/?pizza" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                      <img src="https://source.unsplash.com/random/900x700/?momos" class="d-block w-100" alt="..."/>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
    </div>
  )
}
