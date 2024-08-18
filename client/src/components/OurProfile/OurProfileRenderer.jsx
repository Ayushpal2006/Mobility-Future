import React, { useEffect, useState } from "react";
import styles from "./OurProfile.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import OurProfile from "./components/OurProfile";

export default function OurProfileRenderer() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.npoint.io/ad4ff40dd650debeaae2/${id}`
      );
      setData(result.data);
    };
    getData();
  }, []);

  console.log(data);

  return <OurProfile data={data} />;
}
