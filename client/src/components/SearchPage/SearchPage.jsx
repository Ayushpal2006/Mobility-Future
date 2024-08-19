import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import SelectDD from "./components/SelectDD";
import data from "../filter.json";
import PostCard from "./components/PostCard";
import { useEffect } from "react";
import axios from "axios";

export default function SearchPage() {
  function handleChange(id) {
    console.log(id);
  }
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/posts`
      );
      setPostsData(result.data);
    };
    getData();
  }, []);

  console.log(postsData);

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
          {postsData.map((obj) => {
            return <PostCard data={obj} key={obj.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
