import React from "react";
import "./component.css";

const PopularServices = () => {
  return (
    <section id="PopularServices">
      <h2 className="titleService">Popular Service Products</h2>
      <p className="subtitle">Construction</p>
      <hr className="line" />
      <div className="ServiceCard">
        <div className="card servicecardbody" >
          <img
            className="card-img-top servicecardimg"
            src="https://media.istockphoto.com/id/1302977490/photo/red-brick-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=zVxF9JKDP-coitWLP2i6m3ab6Q51BOtCLb9UUjo5o7A="
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Bricks</h5>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1340470086/photo/cable-drums-for-laying-internet-fiber-optic-cables-in-residential-areas.jpg?b=1&s=170667a&w=0&k=20&c=zbWMsa7aFLa2VkGLvjJWlUcBFgBHxsLCnNOYP-STe5E="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Wire</h5>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1411273025/photo/pottery-package-in-the-brown-paper-bag-on-the-desk.jpg?b=1&s=170667a&w=0&k=20&c=KV1oNsnjuT7GgceqY9eCUCxRct-cBuDj45iq1L3WdMY="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Paper bag</h5>
          </div>
        </div>
        <div className="card" style={{ width: "10rem" }}>
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1352877532/photo/filling-a-bucket-with-cement-at-construstion-site.jpg?b=1&s=170667a&w=0&k=20&c=NcX6vSY3iQRHv5WKd89EZ8qJJIyLt41WoyzOy1H-LNs="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Cement</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
