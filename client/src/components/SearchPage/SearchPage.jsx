import React from "react";
import styles from "./SearchPage.module.css";
import SelectDD from "./components/SelectDD";
import data from "../filter.json";
import PostCard from "./components/PostCard";

export default function SearchPage() {
  function handleChange(id) {
    console.log(id);
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h1 className="amsterdam">Filters</h1>
        <hr />
        <br />
        <div>
          <SelectDD
            name="fromCity"
            arr={data.fromCity}
            title="From City"
            func={handleChange}
          />
          <SelectDD
            name="fare"
            arr={data.fare}
            title="Fare"
            func={handleChange}
          />
          <SelectDD
            name="weight"
            arr={data.weight}
            title="Cargo Weight"
            func={handleChange}
          />
          <SelectDD
            name="date"
            arr={data.date}
            title="Date"
            func={handleChange}
          />
        </div>
      </div>
      <div>
        <h1 className="amsterdam">Search Page</h1>
        <hr />
        <div className={styles.cardsContainer}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
}
