"use client";
// import { cookies } from "next/headers";

import { apiCall } from "@/service/axios";
import UserHeader from "./header";
import { useEffect, useState } from "react";
// export async function getServerSideProps() {
//   try {
//     const response = await fetch(`http://localhost:8080/user/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${cookies().get(`serverToken`)?.value}`,
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export default function UserProjectPage(props: any) {
  const [data, setData] = useState([]);
  const getUserDetail = async () => {
    try {
      const response = await apiCall("GET", "http://localhost:8080/user/me");
      setData(response);
    } catch (error) {
      console.error("Error creating link:", error);
    }
  };
  useEffect(() => {
    getUserDetail();
  }, []);

  return <UserHeader data={data} getDetailProject={props.getDetailProject} />;
}
