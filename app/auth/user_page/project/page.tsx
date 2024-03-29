import { cookies } from "next/headers";
import { ProjectComponent } from "@/app/auth/user_page/project/project-component";

async function getData() {
  try {
    const response = await fetch(
      `http://localhost:8080/dashboard/get-project-list`,
      {
        method: "GET",
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
  } catch (error) {
    console.log(error);
  }
}

export default async function ProjectComponentShow() {
  const data = await getData();
  if (!data || data.length === 0) {
    // Xử lý trường hợp không có dự án nào được trả về từ API
    return <div>No projects found.</div>;
  }
  // const projectData = data[0];
  // return <ProjectComponent data={projectData} />;

  return (
    <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {data.map(
        (
          projectData: {
            projectID: number;
            projectName: string;
            projectSlug: string;
            totalLink: string;
            totalClick: string;
          },
          index: number,
        ) => (
          <ProjectComponent key={index} data={projectData} />
        ),
      )}
    </div>
  );
}
