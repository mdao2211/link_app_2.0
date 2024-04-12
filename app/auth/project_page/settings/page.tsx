"use client";
/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import slashLine from "@/icons/line-segment-svgrepo-com.svg";
import plusButton from "@/icons/plus-svgrepo-com.svg";
import chevronUpDown from "@/icons/chevron-up-chevron-down-svgrepo-com.svg";
import { UpgradePopup } from "@/components/auth/projectpage/upgrade-popup";
import { ProjectSelector } from "@/components/auth/projectpage/project-selector";
import { SignOut } from "@/components/auth/log-out";
import { DeleteProject } from "@/components/auth/projectpage/delete-project";
import UserProjectPage from "../user/page";
import { apiCall } from "@/service/axios";

const SettingsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const getDetailProject = JSON.parse(localStorage.getItem("projectDetail")!);

  const [data, setData] = useState({
    projectID: getDetailProject.projectID,
    slug: getDetailProject.projectSlug,
    name: getDetailProject.projectName,
    verify: "",
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const toggleProjectMenu = () => {
    setIsProjectMenuOpen(!isProjectMenuOpen);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const newData = {
      projectID: data.projectID,
      slug: data.slug,
      verify: data.verify,
    };
    try {
      const response = await apiCall(
        "DELETE",
        "http://localhost:8080/dashboard/delete-project",
        newData,
      );
      console.log(response);
      location.replace("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSaveChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const newData = {
      projectID: data.projectID,
      slug: data.slug,
      name: data.name,
    };
    try {
      const response = await apiCall(
        "PUT",
        "http://localhost:8080/dashboard/update-project-info",
        newData,
      );
      console.log(response);
      location.replace("/");
    } catch (error) {
      console.error("Error creating link:", error);
    }
  };
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <UserProjectPage getDetailProject={getDetailProject} />
      {/* SETTINGS  */}
      <div className="h-[calc(100vh-16px)] bg-white">
        <div className="pt-12 flex h-36 items-center border-b border-gray-200 bg-white">
          <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-gray-600">Settings</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid items-start gap-5 py-10 lg:grid-cols-5">
          <div className="top-36 flex gap-1 lg:sticky lg:grid">
            <a
              className="rounded-md p-2.5 text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200 font-semibold text-black"
              href="/auth/project_page/settings"
            >
              General
            </a>
          </div>
          <div className="grid gap-5 lg:col-span-4">
            <form
              onSubmit={handleSaveChange}
              className="rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative flex flex-col space-y-6 p-5 sm:p-10">
                <div className="flex flex-col space-y-3">
                  <h2 className="text-xl font-medium">Project Name</h2>
                  <p className="text-sm text-gray-500">
                    This is the name of your project on LINK.
                  </p>
                </div>
                <input
                  placeholder="My Project"
                  required
                  maxLength={32}
                  className="w-full p-2 max-w-md rounded-md border border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  type="text"
                  value={data.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between space-x-4 rounded-b-lg border-t border-gray-200 bg-gray-50 p-3 sm:px-10">
                <p className="prose-sm prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-gray-700 text-gray-500 transition-colors">
                  Max 32 characters.
                </p>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all  hover:text-white-700 border-gray-200 bg-white text-black"
                  >
                    <p>Save Changes</p>
                  </button>
                </div>
              </div>
            </form>

            <form
              onSubmit={handleSaveChange}
              className="rounded-lg border border-gray-200 bg-white"
            >
              <div className="relative flex flex-col space-y-6 p-5 sm:p-10">
                <div className="flex flex-col space-y-3">
                  <h2 className="text-xl font-medium">Project Slug</h2>
                  <p className="text-sm text-gray-500">
                    This is your projects unique slug on LINK.
                  </p>
                </div>
                <input
                  placeholder="My Project"
                  required
                  maxLength={48}
                  className="w-full p-2 max-w-md rounded-md border border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  type="text"
                  value={data.slug}
                  onChange={handleInputChange}
                  name="slug"
                />
              </div>
              <div className="flex items-center justify-between space-x-4 rounded-b-lg border-t border-gray-200 bg-gray-50 p-3 sm:px-10">
                <p className="prose-sm prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-gray-700 text-gray-500 transition-colors">
                  Only lowercase letters, numbers, and dashes. Max 48
                  characters.
                </p>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all  hover:text-white-700 border-gray-200 bg-white text-black"
                  >
                    <p>Save Changes</p>
                  </button>
                </div>
              </div>
            </form>

            <div className="rounded-lg border border-red-600 bg-white">
              <div className="flex flex-col space-y-3 p-5 sm:p-10">
                <h2 className="text-xl font-medium">Delete Project</h2>
                <p className="text-sm text-gray-500">
                  Permanently delete your project, custom domain, and all
                  associated links + their stats. This action cannot be undone -
                  please proceed with caution.
                </p>
              </div>
              <div className="border-b border-red-600"></div>
              <div className="flex items-center justify-end px-5 py-4 sm:px-10">
                <div>
                  <DeleteProject
                    handleDelete={handleDelete}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
