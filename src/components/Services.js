import React from "react";
import "./component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faBullhorn,
  faIndianRupee,
  faLightbulb,
  faMobileRetro,
  faNewspaper,
  faTelevision,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section id="services">
      <div class="grid-container">
        <div class="grid-item">
          <FontAwesomeIcon icon={faMobileRetro} />

          <p>Prepaid Mobile Recharge</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faTelevision} />

          <p>DTH recahrge</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faIndianRupee} />

          <p>Loans</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faBullhorn} />

          <p>Promotion</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faNewspaper} />
          <p>News</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faBlog} />
          <p>Blog</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faWater} />
          <p>water Bill</p>
        </div>
        <div class="grid-item">
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Electricity Bill</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
