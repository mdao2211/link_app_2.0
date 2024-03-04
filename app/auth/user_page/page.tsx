"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import slashLine from "@/icons/line-segment-svgrepo-com.svg";
import logOutIcon from "@/icons/sign-out-2-svgrepo-com.svg";
import plusButton from "@/icons/plus-svgrepo-com.svg";
import chevronUpDown from "@/icons/chevron-up-chevron-down-svgrepo-com.svg";
import { ProjectCard } from "@/components/auth/create-project";
import { ProjectComponent } from "@/components/auth/project-component";

export default function userPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  const toggleProjectMenu = () => {
    setIsProjectMenuOpen(!isProjectMenuOpen);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <header className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-gray-300">
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
                    src="https://lh3.googleusercontent.com/a/ACg8ocJn1LgrTYXvKfMBAN3ZAtQF8VoUbaXitL00rdX27Q7s=s96-c"
                    alt="img"
                    width={20}
                    height={20}
                    className="blur-0 h-8 w-8 flex-none overflow-hidden rounded-full"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex items-center space-x-3 sm:flex">
                  <span className="inline-block max-w-[100px] truncate text-sm font-medium sm:max-w-[200px]">
                    Manh Dao
                  </span>
                </div>
                <Image
                  className="mx-2"
                  src={chevronUpDown}
                  alt={"chevronUpDown"}
                />
              </button>

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
                        <button
                          onClick={() => {
                            setIsPopupOpen(true);
                          }}
                        >
                          Add a new project
                        </button>
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
                      <button className="w-full rounded-md p-2 text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                        <a
                          className="flex items-center justify-start space-x-2"
                          href="/auth/login"
                        >
                          <Image src={logOutIcon} alt={"LogOut"}></Image>
                          <p>Log out</p>
                        </a>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* PROJECT  */}
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">My Projects</h1>
            <div>
              <button
                type="button"
                className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
                onClick={togglePopup}
              >
                <p>Create project</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      {isPopupOpen && (<div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-gray-100 bg-opacity-50 backdrop-blur-md"
          onClick={handleOutsideClick}
        >
          <ProjectCard />
        </div>)}
      {/* PROJECTCOMPONENTS */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectComponent />
        </div>
      </div>
    </div>
  );
}
