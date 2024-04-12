"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// ./app/auth/user_page/create-project/create-data.tsx
export async function createDataProject(formData: FormData) {
  try {
    const rawFormData = {
      longUrl: formData.get("longUrl"),
      destinationUrl: formData.get("destinationUrl"),
      shortLink: formData.get("shortUrl"),
    };
    console.log("Data: ");
    console.log(rawFormData);
    const response = await fetch(
      `http://localhost:8080/{projectSlug}/create-short`,
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
      // revalidatePath("/auth/project_page/{projectID}");
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
