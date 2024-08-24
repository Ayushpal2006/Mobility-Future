import React, { useEffect, useState } from "react";
import PostCard from "../../SearchPage/components/PostCard";
import axios from "axios";

export default function LatestJobs() {
  const [postsData, setPostsData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}api/posts`
      );
      setPostsData(result.data);
    };
    getData();
  }, []);

  return (
    <div>
      {postsData ? (
        postsData.slice(0, 3).map((obj) => {
          return <PostCard data={obj} />;
        })
      ) : (
        <h1>"Loading"</h1>
      )}
    </div>
  );
}
