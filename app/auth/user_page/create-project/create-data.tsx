"use server";
import { cookies } from "next/headers";

// ./app/auth/user_page/create-project/create-data.tsx
export async function createDataProject(formData: FormData) {
  try {
    const rawFormData = {
      name: formData.get("projectName"),
      slug: formData.get("projectSlug"),
      totalClick: Number(formData.get("totalClick")),
      totalLink: Number(formData.get("totalLink")),
    };
    console.log("Data: ");
    console.log(rawFormData);
    const response = await fetch(
      `http://localhost:8080/dashboard/create-project`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies().get(`serverToken`)?.value}`,
        },
        body: JSON.stringify(rawFormData),
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
