import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Footer from "../Footer/Footer";
import Carousel from "./components/Carousel";
import $ from "jquery";
import OurServices from "./components/OurServices";
import HowItWorks from "./components/HowItWorks";
import LatestJobs from "./components/LatestJobs";

export default function Home() {
  useEffect(() => {
    $("body").css("overflow-y", "auto");
    return () => {
      $("body").css("overflow-y", "hidden");
    };
  });

  return (
    <>
      <Carousel styleData={styles.carouselContainer} />
      <div className={`${styles.container} ${styles.LatestJobs}`}>
        <h1 className="amsterdam">Latest Jobs</h1>
        <LatestJobs />
      </div>
      <div className={styles.container}>
        <h1 className="amsterdam">Our Services</h1>
        <OurServices />
      </div>
      <div className={styles.container}>
        <h1 className="amsterdam">The Process</h1>
        <HowItWorks />
      </div>

      <Footer />
    </>
  );
}
