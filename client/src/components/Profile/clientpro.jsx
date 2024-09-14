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
  const [data, setData] = useState({
    postsData: [],
    userData: {},
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("id")) {
      navigate("/");
    }
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/posts/${Cookies.get("id")}`
      );
      setData(
        (currData) =>
          (currData = {
            userData: currData.userData,
            postsData: result.data,
          })
      );
    };
    const getUserData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/user/${Cookies.get("id")}`
      );
      setData(
        (currData) =>
          (currData = {
            userData: result.data,
            postsData: currData.postsData,
          })
      );
    };
    getUserData();
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

  console.log(data.userData);

  return (
    <>
      <div className={styles.procast} id="profileDet">
        <div className={`${styles.user} amsterdam`}>
          <div>
            <span>
              <img src={profileimg} alt="loading" />
            </span>
            <h1>{data.userData.name ? data.userData.name : "Loading"}</h1>
          </div>
          <div>
            <button onClick={toAppln}>My Applications</button>
          </div>
        </div>

        <div className={`moderustic ${styles.detailDiv}`}>
          <div>
            <h1 className="amsterdam">Email: </h1>
            <h3 className="moderustic">
              {data.userData.email ? data.userData.email : "Loading"}
            </h3>
            <h1 className="amsterdam">Role: </h1>
            <h3 className="moderustic">
              {data.userData.role ? data.userData.role : "Loading"}
            </h3>
          </div>
          <div>
            <h1 className="amsterdam">Address</h1>
            <p className="moderustic">
              {data.userData.Address ? data.userData.Address : "Loading"}
              <pre> </pre>
              {data.userData.Address_two ? data.userData.Address_two : ""}
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
          {!data.postsData[0] ? (
            <h1
              className="amsterdam"
              style={{ textAlign: "center", fontSize: "7.5vh" }}
            >
              You Have No Applications
            </h1>
          ) : (
            data.postsData.map((obj) => {
              return <PostCard data={obj} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
export default Profile;
