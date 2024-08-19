import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OurProfile from "./components/OurProfile";

export default function OurProfileRenderer() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://api.npoint.io/4109d16f660f206466d4/${id}`
      );
      setData(result.data);
    };
    getData();
  }, [id]);

  return <OurProfile data={data} />;
}
