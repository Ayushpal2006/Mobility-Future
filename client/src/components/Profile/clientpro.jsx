import React, { useEffect, useState } from "react";
import styles from "./clientpro.module.css";
import PostCard from "../SearchPage/components/PostCard";
import axios from "axios";
import $ from "jquery";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const profileimg =
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";

function Profile() {
  const [postsData, setPostsData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("id")) {
      navigate("/");
    }
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/posts`
      );
      setPostsData(result.data);
    };
    getData();
  }, []);

  function toDetails() {
    $("#profileApp").hide();
    $("#profileDet").show();
  }

  function toAppln() {
    $("#profileDet").hide();
    $("#profileApp").show();
  }

  return (
    <>
      <div className={styles.procast} id="profileDet">
        <div className={`${styles.user} amsterdam`}>
          <div>
            <span>
              <img src={profileimg} alt="loading" />
            </span>
            <h1>Rohit Sharma</h1>
          </div>
          <div>
            <button onClick={toAppln}>My Applications</button>
          </div>
        </div>

        <div className={`moderustic ${styles.detailDiv}`}>
          <div>
            <h1 className="amsterdam">Email: </h1>
            <h3 className="moderustic">lakshit.singh.mail@gmail.com</h3>
            <h1 className="amsterdam">Role: </h1>
            <h3 className="moderustic">Driver</h3>
          </div>
          <div>
            <h1 className="amsterdam">Address</h1>
            <p className="moderustic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              atque quis animi quidem, dolorem sint quae excepturi asperiores
              facere rem ea libero magni! Recusandae a ipsam similique rerum
              sapiente eligendi.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.Application}
        id="profileApp"
        style={{ display: "none" }}
      >
        <button className="amsterdam" onClick={toDetails}>
          My Details
        </button>
        <div>
          {postsData.map((obj) => {
            return <PostCard data={obj} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Profile;
