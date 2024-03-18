"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import slashLine from "@/icons/line-segment-svgrepo-com.svg";
import plusButton from "@/icons/plus-svgrepo-com.svg";
import chevronUpDown from "@/icons/chevron-up-chevron-down-svgrepo-com.svg";
import { UpgradePopup } from "@/components/auth/projectpage/upgrade-popup";
import { ProjectSelector } from "@/components/auth/projectpage/project-selector";
import { SignOut } from "@/components/auth/log-out";
import { DeleteProject } from "@/components/auth/projectpage/delete-project";

const SettingsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const toggleProjectMenu = () => {
    setIsProjectMenuOpen(!isProjectMenuOpen);
  };
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <header className="sticky left-0 right-0 top-0 z-[1000] border-b border-gray-200 bg-gray-300">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Image
                className="mr-4"
                src={linkIcon}
                alt="LINK Logo"
                width={50}
                height={50}
              />
              <a href="/">
                <p className="text-4xl font-black">LINK</p>
              </a>
              <Image className="mx-3" src={slashLine} alt={"slashLine"} />
              {/* USER&PROJECTBUTTON  */}
              <button
                className="sm:inline-flex flex items-center justify-between rounded-lg bg-gray-300 p-1.5 text-left text-sm transition-all duration-75 hover:bg-gray-100 focus:outline-none active:bg-gray-200"
                type="button"
                onClick={toggleProjectMenu}
              >
                <div className="flex items-center space-x-3 pr-2">
                  <img
                    src="https://avatar.vercel.sh/clt3tvyqy0000tcgx0lnncd4y"
                    alt="avatar"
                    width={20}
                    height={20}
                    className="blur-0 h-8 w-8 flex-none overflow-hidden rounded-full"
                    style={{ color: "transparent" }}
                  />
                </div>

                <div className="flex items-center space-x-3 sm:flex">
                  <span className="inline-block max-w-[100px] truncate text-sm font-medium sm:max-w-[200px]">
                    LINK
                  </span>
                  <span className="max-w-fit rounded-full border px-2 py-px text-xs font-medium capitalize whitespace-nowrap border-black bg-black text-white">
                    Free
                  </span>
                </div>
                <Image
                  className="mx-2"
                  src={chevronUpDown}
                  alt={"chevronUpDown"}
                />
              </button>
              {/* UpgradeButton  */}
              <div>
                <UpgradePopup />
              </div>
              {/* USER&PROJECT MENU DROPDOWN  */}
              {isProjectMenuOpen && (
                <div
                  className="animate-slide-up-fade z-50 items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block"
                  style={{
                    position: "fixed",
                    left: "310px",
                    top: "0px",
                    transform: "translate(52.8px, 62.4px)",
                  }}
                >
                  <div className="relative mt-1 max-h-72 w-full space-y-0.5 overflow-auto rounded-md bg-white p-2 text-base sm:w-60 sm:text-sm sm:shadow-lg">
                    <div className="p-2 text-xs text-gray-500">My Projects</div>
                    <a
                      className="relative flex w-full items-center space-x-2 rounded-md px-2 py-1.5 hover:bg-gray-100 active:bg-gray-200  transition-all duration-75"
                      href="/auth/project_page"
                    >
                      <img
                        width={20}
                        height={20}
                        src="https://avatar.vercel.sh/clt3tvyqy0000tcgx0lnncd4y"
                        className="blur-0 h-7 w-7 shrink-0 overflow-hidden rounded-full"
                        alt="avatar"
                      />
                      <span className="block truncate text-sm sm:max-w-[140px] font-normal">
                        LINK
                      </span>
                    </a>
                    <button className="flex w-full cursor-pointer items-center space-x-2 rounded-md p-2 transition-all duration-75 hover:bg-gray-100">
                      <Image src={plusButton} alt={"plus button"} />
                      <span className="block truncate">
                        <button onClick={togglePopup}>Add a new project</button>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* ICON */}
            <div className="flex items-center space-x-6">
              <div className="relative inline-block">
                <button
                  className="sm:inline-flex group relative"
                  type="button"
                  onClick={toggleMenu}
                >
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJn1LgrTYXvKfMBAN3ZAtQF8VoUbaXitL00rdX27Q7s=s96-c"
                    className="rounded-full border border-gray-300 h-9 w-9 transition-all duration-75 group-focus:outline-none group-active:scale-95 sm:h-10 sm:w-10"
                    alt="user_logo"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-green-600"></div>
                </button>
                {/* Dropdown menu */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 flex w-full flex-col space-y-px rounded-md bg-white p-3 sm:w-56">
                    <a className="p-2" href="/">
                      <p className="truncate text-sm font-medium text-gray-900">
                        Manh Dao
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        manhdao@gmail.com
                      </p>
                    </a>
                    <div className="py-1">
                      <SignOut />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <ProjectSelector />
        </div>
      </header>
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
            <form className="rounded-lg border border-gray-200 bg-white">
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
                  value="LINK"
                  name="name"
                />
              </div>
              <div className="flex items-center justify-between space-x-4 rounded-b-lg border-t border-gray-200 bg-gray-50 p-3 sm:px-10">
                <p className="prose-sm prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-gray-700 text-gray-500 transition-colors">
                  Max 32 characters.
                </p>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  >
                    <p>Save Changes</p>
                  </button>
                </div>
              </div>
            </form>

            <form className="rounded-lg border border-gray-200 bg-white">
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
                  value="LINK"
                  name="name"
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
                    className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  >
                    <p>Save Changes</p>
                  </button>
                </div>
              </div>
            </form>

            <form className="rounded-lg border border-gray-200 bg-white">
              <div className="flex flex-col space-y-3 p-5 sm:p-10">
                <h2 className="text-xl font-medium">Project Logo</h2>
                <p className="text-sm text-gray-500">
                  This is your projects logo on LINK
                </p>
                <div>
                  <label
                    htmlFor="image"
                    className="group relative mt-1 flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
                  >
                    <div className="absolute z-[5] h-full w-full rounded-full"></div>
                    <div className=" absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-full bg-white transition-all group-hover:bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-upload-cloud scale-100 h-5 w-5 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                        <path d="M12 12v9"></path>
                        <path d="m16 16-4-4-4 4"></path>
                      </svg>
                    </div>
                  </label>
                  <div className="mt-1 flex rounded-full shadow-sm">
                    <input
                      id="image"
                      accept="image/*"
                      className="sr-only"
                      type="file"
                      name="image"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4 rounded-b-lg border-t border-gray-200 bg-gray-50 p-3 sm:px-10">
                <p className="text-sm text-gray-500">
                  Square image recommended. Accepted file types: .png, .jpg. Max
                  file size: 2MB.
                </p>
                <div className="shrink-0">
                  <button
                    type="submit"
                    className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  >
                    <p className="">Save changes</p>
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
                  <DeleteProject />
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
