"use server";
import { cookies } from "next/headers";

// ./app/auth/user_page/create-project/create-data.tsx
export async function apiCall(
  method: string,
  url: string,
  body: any = undefined,
  header: any = undefined,
) {
  try {
    const response = await fetch(
      url,
      // `http://localhost:8080/{projectSlug}/create-short`,
      {
        method: method,
        headers: header || {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get(`serverToken`)?.value}`,
        },
        body: JSON.stringify(body),
      },
    );
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log(data);
      return data;
    }
    if (data.success) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
