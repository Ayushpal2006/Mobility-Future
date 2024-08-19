import React from "react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const company_name = "TranspoHub";

  return (
    <div className={styles.container}>
      <h1 className="amsterdam">About Us</h1>
      <hr />
      <p className="moderustic">
        Welcome to {company_name}, your trusted platform for connecting
        transporters with clients seamlessly and remotely. Our mission is to
        bridge the gap between those in need of transportation services and
        skilled transporters who can deliver them. Whether you’re a client
        looking to move goods efficiently or a transporter seeking new
        opportunities, {company_name} offers a streamlined, user-friendly
        interface that makes finding the right match easy and convenient. We
        believe in empowering transport professionals by providing them with the
        tools and resources they need to succeed in an increasingly digital
        world.
      </p>
      <p className="moderustic">
        At {company_name}, we are committed to fostering a community where
        quality service and reliability are at the forefront. Our platform is
        designed with both clients and transporters in mind, ensuring that every
        connection made is based on trust, transparency, and mutual benefit.
        With features that allow for secure communication, real-time tracking,
        and a wide range of transportation options, we aim to revolutionize the
        way transportation services are accessed and delivered. Join us today
        and discover how {company_name} is redefining the future of
        transportation.
      </p>
    </div>
  );
}
