import { cookies } from "next/headers";
import { UserHeader } from "./header";
async function getData() {
  try {
    const response = await fetch(`http://localhost:8080/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get(`serverToken`)?.value}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function User() {
  const data = await getData();
  return <UserHeader data={data} />;
}
