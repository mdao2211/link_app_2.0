/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrowDown from "@/icons/arrow-down-wide-short-svgrepo-com.svg";
import acceptCheckMark from "@/icons/accept-checklist-checkmark-svgrepo-com.svg";
import searchIcon from "@/icons/search-alt-2-svgrepo-com.svg";
import graphBar from "@/icons/graph-bar-svgrepo-com.svg";
import dotsMenu from "@/icons/interface-ui-dots-menu-svgrepo-com.svg";
import menuIcon from "@/icons/menu-alt-2-svgrepo-com.svg";
import logOutIcon from "@/icons/sign-out-2-svgrepo-com.svg";
import chevronUpDown from "@/icons/chevron-up-chevron-down-svgrepo-com.svg";
import { EditPopup } from "@/components/auth/projectpage/edit-popup";
import { QrCode } from "@/components/auth/projectpage/qr-code";
import { DeleteLink } from "@/components/auth/projectpage/delete-link";
export function MenuList() {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isProjectMenuBarOpen, setIsProjectMenuBarOpen] = useState(false);
  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };
  const toggleMenuBar = () => {
    setIsProjectMenuBarOpen(!isProjectMenuBarOpen);
  };

  return (
    <div className="relative mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 flex flex-col space-y-3 py-3">
      <div className="flex h-10 w-full justify-center lg:justify-end">
        <button
          className="sm:inline-flex flex w-48 items-center justify-between space-x-2 rounded-md bg-white px-3 py-2.5 shadow transition-all duration-75 hover:shadow-md"
          type="button"
          onClick={toggleSortMenu}
        >
          <div className="flex items-center justify-start space-x-2">
            <Image src={menuIcon} alt={menuIcon}></Image>
            <p className="text-sm">Sort by</p>
          </div>
          <Image src={chevronUpDown} alt={chevronUpDown}></Image>
        </button>
      </div>
      <div className="block lg:hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Image src={searchIcon} alt={searchIcon}></Image>
          </div>
          <input
            className="peer h-12 w-full rounded-md border border-gray-300 px-10 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="text"
            value=""
          ></input>
        </div>
      </div>
      {/* FILTER MENU  */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-7">
        <div className="scrollbar-hide sticky top-32 col-span-2 hidden max-h-[calc(100vh-150px)] self-start overflow-auto rounded-lg border border-gray-100 bg-white shadow lg:block">
          <div className="grid w-full rounded-md bg-white px-5 lg:divide-y lg:divide-gray-300">
            <div className="grid gap-3 py-6">
              <div className="flex items-center justify-between">
                <h3 className="ml-1 mt-2 font-semibold">Filter Links</h3>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Image src={searchIcon} alt={searchIcon}></Image>
                  </div>
                  <input
                    className="peer h-12 w-full rounded-md border border-gray-300 px-10 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    value=""
                  ></input>
                </div>
              </div>
            </div>
            <fieldset className="overflow-hidden py-6">
              <div className="flex h-8 items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-900">Domains</h4>
                </div>
              </div>
              <div className="mt-4 grid gap-2" style={{ height: "auto" }}>
                <div className="group relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100">
                  <input
                    id="dub.sh"
                    className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
                    type="radio"
                    name="dub.sh"
                  />
                  <label
                    htmlFor="dub.sh"
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
                  >
                    <p>dub.sh</p>
                  </label>
                </div>
                <div className="group relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100">
                  <input
                    id="link.st"
                    className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
                    type="radio"
                    name="link.st"
                  />
                  <label
                    htmlFor="link.st"
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
                  >
                    <p>link.st</p>
                  </label>
                </div>
                <div className="group relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100">
                  <input
                    id="spti.fi"
                    className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
                    type="radio"
                    name="spti.fi"
                  />
                  <label
                    htmlFor="spti.fi"
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
                  >
                    <p>spti.fi</p>
                  </label>
                </div>
                <div className="group relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100">
                  <input
                    id="git.new"
                    className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
                    type="radio"
                    name="git.new"
                  />
                  <label
                    htmlFor="git.new"
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
                  >
                    <p>git.new</p>
                  </label>
                </div>
                <div className="group relative flex cursor-pointer items-center space-x-3 rounded-md bg-gray-50 transition-all hover:bg-gray-100">
                  <input
                    id="amzn.id"
                    className="ml-3 h-4 w-4 cursor-pointer rounded-full border-gray-300 text-black focus:outline-none focus:ring-0"
                    type="radio"
                    name="amzn.id"
                  />
                  <label
                    htmlFor="amzn.id"
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 pl-0 text-sm font-medium text-gray-700"
                  >
                    <p>amzn.id</p>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="col-span-1 auto-rows-min grid-cols-1 lg:col-span-5">
          <ul className="grid min-h-[66.5vh] auto-rows-min gap-3">
            <li className="border-gray-50 relative rounded-lg border-2 bg-white p-3 pr-1 shadow transition-all hover:shadow-md sm:p-4">
              <div className="relative flex items-center justify-between">
                <div className="relative flex shrink items-center">
                  <img
                    alt="dub.sh"
                    loading="lazy"
                    width="20"
                    height="20"
                    decoding="async"
                    data-nimg="1"
                    className="blur-0 h-8 w-8 rounded-full sm:h-10 sm:w-10"
                    src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=dub.sh"
                    style={{ color: "transparent" }}
                  />
                  <div className="ml-2 sm:ml-4">
                    <div className="flex max-w-fit flex-wrap items-center gap-x-2">
                      <a
                        className="max-w-[140px] truncate text-sm font-semibold text-blue-800 sm:max-w-[300px] sm:text-base md:max-w-[360px] xl:max-w-[500px]"
                        href="https://dub.sh/g8qqW6k"
                        target="_blank"
                        rel="noreferrer"
                      >
                        dub.sh/g8qqW6k
                      </a>
                      <button className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95">
                        <span className="sr-only">Copy</span>
                        <svg
                          fill="none"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          className="text-gray-700 transition-all group-hover:text-blue-800"
                        >
                          <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="flex max-w-fit items-center space-x-1">
                      <div className="w-4" data-state="closed">
                        <img
                          alt="Avatar for mdao2211"
                          src="https://avatars.githubusercontent.com/u/145409639?v=4"
                          className="rounded-full border border-gray-300 h-4 w-4"
                          draggable="false"
                        />
                      </div>
                      <p>•</p>
                      <p className="whitespace-nowrap text-sm text-gray-500">
                        Mar 12
                      </p>
                      <p className="xs:block hidden">•</p>
                      <a
                        href="https://dub.sh/EXbDcUN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xs:block hidden max-w-[140px] truncate text-sm font-medium text-gray-700 underline-offset-2 hover:underline sm:max-w-[300px] md:max-w-[360px] xl:max-w-[420px]"
                      >
                        https://dub.sh/EXbDcUN
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    className="flex items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 transition-all duration-75 hover:scale-105 active:scale-100"
                    href="#"
                  >
                    <Image src={graphBar} alt={graphBar}></Image>
                    <p className="whitespace-nowrap text-sm text-gray-500">
                      ?{""}
                      <span className="ml-1 hidden sm:inline-block">
                        clicks
                      </span>
                    </p>
                  </a>
                  <button
                    type="button"
                    className="sm:inline-flex rounded-md px-1 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
                    onClick={toggleMenuBar}
                  >
                    <Image src={dotsMenu} alt={dotsMenu}></Image>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* LIST-MENU DROPDOWN  */}
      {isSortMenuOpen && (
        <div
          className="static animate-slide-up-fade z-50 items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            transform: "translate(-4.9rem, 3rem)",
          }}
        >
          <div className="w-full p-2 md:w-48">
            <button className="flex w-full items-center justify-between space-x-2 rounded-md px-1 py-2 hover:bg-gray-100 active:bg-gray-200">
              <div className="flex items-center justify-start space-x-2">
                <Image src={arrowDown} alt="arrowDown" width={20} height={20} />
                <p className="text-sm">Date Added</p>
              </div>
              <Image
                src={acceptCheckMark}
                alt="acceptCheckMark"
                width={20}
                height={20}
              />
            </button>
            <button className="flex w-full items-center justify-between space-x-2 rounded-md px-1 py-2 hover:bg-gray-100 active:bg-gray-200">
              <div className="flex items-center justify-start space-x-2">
                <Image src={arrowDown} alt="arrowDown" width={20} height={20} />
                <p className="text-sm">Number Clicks</p>
              </div>
              <Image
                src={acceptCheckMark}
                alt="acceptCheckMark"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      )}
      {/* PROJECT-MENUBAR DROPDOWN  */}
      {isProjectMenuBarOpen && (
        <div
          className="static animate-slide-up-fade z-50 items-center rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block"
          style={{
            position: "absolute",
            right: "0px",
            top: "0px",
            transform: "translate(-4.9rem, 9rem)",
          }}
        >
          <div className="grid w-full gap-px p-2 sm:w-48">
            <EditPopup />
            <QrCode />
            <DeleteLink />
          </div>
        </div>
      )}
    </div>
  );
}
