import React from "react";
import "./component.css";

const Header = () => {
  return (
    <section id="first">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active imgdiv">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913__340.jpg"
              class="d-block w-100 images"
              alt="hi"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/09/18/56/shopping-2615482__340.jpg"
              class="d-block w-100 images"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1405377474/photo/buying-clothes-with-virtual-reality-app-on-a-smart-phone-choosing-the-color-and-size-of-the.jpg?s=612x612&w=0&k=20&c=RGGMPSJ64vBdZL-kPoLUO8OUwOs_7Rnfg0xauCr0wiU="
              class="d-block w-100 images"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
