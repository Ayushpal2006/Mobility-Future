import React from "react";
import wp1 from "../../../images/c1-d.jpg";
import wp2 from "../../../images/c2-d.jpg";
import wp3 from "../../../images/c3-d.jpg";

export default function Carousel(props) {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${props.styleData}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={wp1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Connecting Roads, Delivering Futures</h5>
            <p>
              How our platform connects customers with drivers, ensuring smooth
              interstate deliveries while fostering economic opportunities.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={wp2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Moving Goods, Creating Jobs</h5>
            <p>
              Highlighting how our services generate meaningful work for drivers
              while efficiently transporting goods across state lines.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={wp3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Empowering Drivers, Delivering Success</h5>
            <p>
              Showcasing how we empower truck drivers with flexible job
              opportunities, allowing them to achieve success independently.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
