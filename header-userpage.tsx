/* eslint-disable @next/next/no-img-element */
"use server";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import slashLine from "@/icons/line-segment-svgrepo-com.svg";
import settingIcon from "@/icons/settings-svgrepo-com.svg";
import plusButton from "@/icons/plus-svgrepo-com.svg";
import chevronUpDown from "@/icons/chevron-up-chevron-down-svgrepo-com.svg";
import { ProjectCard } from "@/components/auth/userpage/create-project";
import { ProjectComponent } from "@/components/auth/projectpage/project-component";
import { SignOut } from "@/components/auth/log-out";
import { cookies } from "next/headers";

// type Data = {
//   name?: string;
//   id?: number;
//   email?: string;
// };

export async function UserHeader() {
  // const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState(true);
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
  const accessToken = cookies().get("serverToken");

  // let JWTAccessToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNzExMDAzNzU2LCJleHAiOjE3MTE4Njc3NTZ9.xsFRZqRUUBpAxvgJbjyByu97eRmP5fJoZUbmks2NJPs";

  // const getData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8080/user/me`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       if (data) setData(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
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
                  {/* {data?.name} */}
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
                  src="https://avatars.githubusercontent.com/u/145409639?v=4"
                  // src={session?.user?.image || "default_image"}
                  className="rounded-full border border-gray-300 h-9 w-9 transition-all duration-75 group-focus:outline-none group-active:scale-95 sm:h-10 sm:w-10"
                  alt="user_logo"
                />
                <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-green-600"></div>
              </button>
              {/* Dropdown menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 flex w-full flex-col space-y-px rounded-md bg-white p-3 sm:w-56 shadow-lg">
                  <a className="p-2" href="/">
                    <p className="truncate text-sm font-medium text-gray-900">
                      {/* {data.name} */}
                      {/* {session?.user?.name} */}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      {/* {data?.name} */}
                      <br />
                      {/* {data?.email} */}
                    </p>
                  </a>
                  <a
                    className="block w-full rounded-md p-2 text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
                    href="/auth/project_page/settings"
                  >
                    <div className="flex items-center justify-start space-x-2">
                      <Image src={settingIcon} alt={settingIcon}></Image>
                      <p className="text-sm">Settings</p>
                    </div>
                  </a>
                  <div className="py-1">
                    <SignOut />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}