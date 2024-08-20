import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import SelectDD from "./components/SelectDD";
import data from "../filter.json";
import PostCard from "./components/PostCard";
import { useEffect } from "react";
import axios from "axios";
import $ from "jquery";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    fromCity: "Any",
    fare: "Any",
    weight: "Any",
  });
  const [postsData, setPostsData] = useState({
    allData: [],
    showData: [],
  });

  function handleChange(id) {
    setFilters({
      ...filters,
      [id]: $(`select[name='${id}'] option:selected`).val(),
    });
  }

  useEffect(() => {
    var arr = postsData.allData;
    for (const key in filters) {
      if (filters[key] !== "Any") {
        if (key === "fare") {
          const filterVar = +filters[key];
          arr = arr.filter((obj) => {
            return +obj.fare > filterVar;
          });
        }
        if (key === "weight") {
          const filterVar = +filters[key];
          arr = arr.filter((obj) => {
            return obj.cargo_weight > filterVar;
          });
        }
      }
    }
    setPostsData((state) => ({
      ...state,
      showData: arr ? arr : [],
    }));
  }, [filters, postsData.allData, setPostsData]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/posts`
      );
      setPostsData({ showData: result.data, allData: result.data });
    };
    getData();
    console.log("akjhsdbfa");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <h1 className="amsterdam">Filters</h1>
        <hr />
        <br />
        <div>
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
        </div>
      </div>
      <div>
        <h1 className="amsterdam">Search Page</h1>
        <hr />
        <div className={styles.cardsContainer}>
          {postsData.showData.map((obj) => {
            return <PostCard data={obj} key={obj.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
