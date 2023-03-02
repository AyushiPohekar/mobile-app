import React from "react";
import "./component.css";
const PopularServiceProvider = () => {
  return (
    <section id="ServiceProvider">
      <h2 className="titleProvider"> All Popular Service Providers</h2>
      <p className="subtitle">Construction</p>
      <hr className="line" />
      <div className="ServiceCard">
        <div className="card servicecardbody">
          <img
            className="card-img-top servicecardimg"
            src="https://media.istockphoto.com/id/1352083784/photo/cranes-on-the-construction-site-surrounded-by-new-real-estates.jpg?b=1&s=170667a&w=0&k=20&c=jpYLwQMK0xcMGKTFicdgApYn93EL_WbuNmMtyV3hgIc="
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Apna interior designer</h5>
          </div>
        </div>
        <div className="card servicecardbody">
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1392842137/photo/male-and-female-construction-engineers-with-drawings-comparing-data.jpg?b=1&s=170667a&w=0&k=20&c=0jlJ1QozL6HnEsR_mifDGC9nx948JkkuH2wxg22x8d4="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Star Traders</h5>
          </div>
        </div>
        <div className="card servicecardbody">
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1392546887/photo/equipment-in-large-factories.jpg?b=1&s=170667a&w=0&k=20&c=zMVSmyQmupIu2mX86qd4Ni_jUnTvtK8F3hRWDJL5BJo="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Paper bag</h5>
          </div>
        </div>
        <div className="card servicecardbody">
          <img
            className="card-img-top"
            src="https://media.istockphoto.com/id/1418799404/photo/excavators-working-on-construction-site-at-sunset.jpg?s=612x612&w=0&k=20&c=1UfKOYVt3HQfCCmxhojeXijuPjEl5qfMiwBAdQx7UmA="
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">Shakti Agency</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServiceProvider;
