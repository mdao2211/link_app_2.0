"use client";
import { DialogDemo } from "@/app/auth/project_page/create-link/page";
import UserProjectPage from "@/app/auth/project_page/user/page";
import { MenuList } from "@/app/auth/project_page/list/menu-list";
import { apiCall } from "@/service/axios";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // const projectID = window.location.pathname.replace("/auth/project_page/", "");
  const getDetailProject = JSON.parse(localStorage.getItem("projectDetail")!);
  console.log(getDetailProject);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <UserProjectPage getDetailProject={getDetailProject} />
      {/* LINK  */}
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">
              {getDetailProject?.projectName}
            </h1>
            {/* UpgradePopupOpen  */}
            <DialogDemo getDetailProject={getDetailProject} />
          </div>
        </div>
      </div>
      {/* LIST  */}
      <MenuList getDetailProject={getDetailProject} />
    </div>
  );
};

export default AuthLayout;
