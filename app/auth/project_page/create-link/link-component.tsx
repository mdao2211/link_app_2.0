/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import graphBar from "@/icons/graph-bar-svgrepo-com.svg";
import dotsMenu from "@/icons/interface-ui-dots-menu-svgrepo-com.svg";
import menuIcon from "@/icons/menu-alt-2-svgrepo-com.svg";
import { useState } from "react";
import { DeleteLink } from "@/components/auth/projectpage/delete-link";
import { EditPopup } from "@/components/auth/projectpage/edit-popup";
import copy from "clipboard-copy"; // Import hàm copy từ clipboard-copy
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// type LinkComponentData = {
//   destinationUrl: string;
//   shortLink: string;
//   dateCreated: string;
//   totalClick: number;
// };

export function LinkComponent(props: any) {
  const [isProjectMenuBarOpen, setIsProjectMenuBarOpen] = useState(false);
  const { data, getListLink } = props;

  const toggleMenuBar = () => {
    setIsProjectMenuBarOpen(!isProjectMenuBarOpen);
  };

  const handleCopy = () => {
    // Tạo đường link cần sao chép
    const linkToCopy = `localhost:8080/public/${data?.shortUrl}`;
    // Sao chép đường link vào clipboard
    copy(linkToCopy);
    toast.success("Copy successful!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // Thông báo khi đã sao chép thành công
    console.log(`Link đã được sao chép vào clipboard: ${linkToCopy}`);
  };

  // if (!data || data.length === 0) {
  //   // Xử lý trường hợp không có dự án nào được trả về từ API
  //   return <div>No links found.</div>;
  // }
  return (
    // <div className="col-span-1 auto-rows-min grid-cols-1 lg:col-span-5">
    <>
      <div className="grid auto-rows-min gap-3 mb-4">
        <div className="border-gray-50 relative rounded-lg border-2 bg-white p-3 pr-1 shadow transition-all hover:shadow-md sm:p-4">
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
                    href={`http://localhost:8080/public/${data?.shortUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    localhost:8080/public/{data?.shortUrl}
                  </a>
                  <button
                    className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
                    onClick={handleCopy}
                  >
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
                      alt="user created avatar"
                      src="https://th.bing.com/th/id/OIP.k-Q__Htzc1jpg6tVwemJyQHaHa?rs=1&pid=ImgDetMain"
                      className="rounded-full border border-gray-300 h-4 w-4"
                      draggable="false"
                    />
                  </div>
                  <p>•</p>
                  <p className="whitespace-nowrap text-sm text-gray-500">
                    {data?.creationDate}
                  </p>

                  <p className="xs:block hidden">•</p>
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
                  {data?.totalClickUrl || 0}
                  <span className="ml-1 hidden sm:inline-block">clicks</span>
                </p>
              </a>
              <button
                type="button"
                className="sm:inline-flex rounded-md px-1 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
                onClick={toggleMenuBar}
              >
                <DeleteLink
                  setReloadData={props.setReloadData}
                  data={data}
                  getListLink={getListLink}
                  open={isProjectMenuBarOpen}
                  close={toggleMenuBar}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
