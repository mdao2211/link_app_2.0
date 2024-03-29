import { cookies } from "next/headers";

// ./app/auth/user_page/create-project/create-data.tsx
export async function createDataProject() {
  try {
    if (typeof window === "undefined") {
      // Chỉ import next/headers khi chạy trên server-side
      const { cookies } = require("next/headers");
      const response = await fetch(
        `http://localhost:8080/dashboard/create-project`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies().get(`serverToken`)?.value}`,
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
