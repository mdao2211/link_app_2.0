import React, { useEffect } from "react";
import axios from "axios";

function FetchData() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/dashboard/get-project-list")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);
  return console.log("FetchData");
}

export default FetchData;
