/* eslint-disable @next/next/no-img-element */
"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
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
import { LinkComponent } from "../create-link/link-component";
import { apiCall } from "@/service/axios";
export function MenuList(props: any) {
  const [data, setData] = useState([]);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isProjectMenuBarOpen, setIsProjectMenuBarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };
  const toggleMenuBar = () => {
    setIsProjectMenuBarOpen(!isProjectMenuBarOpen);
  };
  const getListLink = async () => {
    try {
      const res = await apiCall(
        "GET",
        `http://localhost:8080/${props.getDetailProject.projectSlug}/get-url-list?projectID=${props.getDetailProject.projectID}`,
      );
      console.log(res);

      setData(res);
    } catch {}
  };
  const sortListLinkByDate = async () => {
    try {
      const res = await apiCall(
        "GET",
        `http://localhost:8080/{projectSlug}/sort-by-create-date?projectID=${props.getDetailProject.projectID}`,
      );
      console.log(res);
      setSortBy("Date Added");
      setData(res);
    } catch {}
  };
  const sortListLinkByClicks = async () => {
    try {
      const res = await apiCall(
        "GET",
        `http://localhost:8080/{projectSlug}/sort-by-total-click-url?projectID=${props.getDetailProject.projectID}`,
      );
      console.log(res);
      setSortBy("Number Clicks");
      setData(res);
    } catch {}
  };
  const searchListLink = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const searchText = e.target.value;
    setSearch(searchText);

    if (searchText !== "") {
      try {
        const res = await apiCall(
          "GET",
          `http://localhost:8080/${props.getDetailProject.projectSlug}/search?search=${searchText}&projectID=${props.getDetailProject.projectID}`,
        );
        console.log(res);
        setData(res);
      } catch {}
    } else {
      getListLink();
    }
  };

  useEffect(() => {
    getListLink();
    console.log(props.reloadData);
  }, [props.reloadData]);
  return (
    <div className="relative mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 flex flex-col">
      <div className="flex h-10 w-full justify-center lg:justify-end  my-2">
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
            name="search"
            value={search}
            onChange={searchListLink}
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
                    onChange={searchListLink}
                    className="peer h-12 w-full rounded-md border border-gray-300 px-10 text-black placeholder:text-gray-400 focus:border-black focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                    value={search}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LINK COMPONENT  */}
        <div className="col-span-1 auto-rows-min grid-cols-1 lg:col-span-5 max-h-[calc(100vh-200px)]   overflow-auto">
          {data.map((item, index) => {
            return (
              <>
                <LinkComponent
                  getListLink={getListLink}
                  key={index}
                  setReloadData={props.setReloadData}
                  // data={{
                  //   destinationUrl: "",
                  //   shortLink: "",
                  //   dateCreated: "08-04-2024",
                  //   totalClick: 0,
                  // }}
                  data={item}
                />
              </>
            );
          })}
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
            <button
              onClick={sortListLinkByDate}
              className="flex w-full items-center justify-between space-x-2 rounded-md px-1 py-2 hover:bg-gray-100 active:bg-gray-200"
            >
              <div className="flex items-center justify-start space-x-2">
                <Image src={arrowDown} alt="arrowDown" width={20} height={20} />
                <p className="text-sm">Date Added</p>
              </div>
              {sortBy === "Date Added" && (
                <Image
                  src={acceptCheckMark}
                  alt="acceptCheckMark"
                  width={20}
                  height={20}
                />
              )}
            </button>
            <button
              onClick={sortListLinkByClicks}
              className="flex w-full items-center justify-between space-x-2 rounded-md px-1 py-2 hover:bg-gray-100 active:bg-gray-200"
            >
              <div className="flex items-center justify-start space-x-2">
                <Image src={arrowDown} alt="arrowDown" width={20} height={20} />
                <p className="text-sm">Number Clicks</p>
              </div>
              {sortBy === "Number Clicks" && (
                <Image
                  src={acceptCheckMark}
                  alt="acceptCheckMark"
                  width={20}
                  height={20}
                />
              )}
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
