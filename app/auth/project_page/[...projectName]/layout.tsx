"use client";
import { DialogDemo } from "@/app/auth/project_page/create-link/page";
import UserProjectPage from "@/app/auth/project_page/user/page";
import { MenuList } from "@/app/auth/project_page/list/menu-list";
import { apiCall } from "@/service/axios";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  // const projectID = window.location.pathname.replace("/auth/project_page/", "");
  const getDetailProject = JSON.parse(localStorage.getItem("projectDetail")!);
  const [reloadData, setReloadData] = useState("");
  console.log(reloadData, "reloadData");

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50">
        {/* HEADER  */}
        <UserProjectPage getDetailProject={getDetailProject} />
        {/* LINK  */}
        <div
          className="flex h-36 items-center border-b border-gray-200 bg-white"
          // style={{ marginTop: "200px" }}
        >
          <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-gray-600">
                {getDetailProject?.projectName}
              </h1>
              {/* UpgradePopupOpen  */}
              <DialogDemo
                setReloadData={setReloadData}
                getDetailProject={getDetailProject}
              />
            </div>
          </div>
        </div>
        {/* LIST  */}
        <MenuList
          setReloadData={setReloadData}
          reloadData={reloadData}
          getDetailProject={getDetailProject}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
