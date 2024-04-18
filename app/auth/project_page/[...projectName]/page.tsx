"use client";
import { DialogDemo } from "@/app/auth/project_page/create-link/page";
import UserProjectPage from "../user/page";
import { MenuList } from "@/app/auth/project_page/list/menu-list";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const projectID = window.location.pathname.replace("auth/project_page/", "");
  console.log(projectID);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <UserProjectPage />
      {/* LINK  */}
      <div className=" flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">Links</h1>
            {/* UpgradePopupOpen  */}
            <DialogDemo />
          </div>
        </div>
      </div>
      {/* LIST  */}
      <div>
        <MenuList />
      </div>
    </div>
  );
};

export default AuthLayout;
