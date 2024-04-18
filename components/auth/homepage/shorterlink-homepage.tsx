import { apiCall } from "@/service/axios";
import { useState } from "react";
import copy from "clipboard-copy"; // Import hàm copy từ clipboard-copy
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* eslint-disable @next/next/no-img-element */
export const ShorterLinkHomepage = () => {
  const [data, setData] = useState([
    {
      longUrl: "https://codelearn.io/",
      shortUrl: "Uj1PMQ",
    },
  ]);
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const handleCopy = (pathname: string) => {
    // Tạo đường link cần sao chép
    const linkToCopy = `localhost:8080/public/${pathname}`;
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
  const generateShortLink = async () => {
    try {
      const randomString = Math.random().toString(36).substring(2, 9);
      setShortUrl(randomString);
    } catch (error) {
      console.error("Error generating short link:", error);
    }
  };
  const getShortLink = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await generateShortLink();
      const response = await apiCall(
        "POST",
        `http://localhost:8080/public/guest-create-url`,
        { longUrl: longUrl },
      );
      if (response) {
        setData([...data, response]);
      } else {
        toast.error("Error", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const renderListShortLink = () => {
    return data.map((item: any, index) => {
      return (
        <li key={index} style={{ opacity: 1, transform: "none" }}>
          <div
            style={{
              transform: "none",
              userSelect: "none",
              touchAction: "pan-y",
            }}
            className="relative flex max-w-md cursor-grab items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing"
            draggable="false"
            tabIndex={0}
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://th.bing.com/th/id/OIP.Wgcgym1BWK_vsb7zEk9mzwHaHa?rs=1&pid=ImgDetMain"
                alt="google.logo"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="blur-0 pointer-events-none h-10 w-10 rounded-full"
                style={{ color: "transparent" }}
              />
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <a
                    className="font-semibold text-blue-800"
                    href={`http://localhost:8080/public/${item.shortUrl}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://localhost:8080/public/{item.shortUrl}
                  </a>
                  <button
                    onClick={() => {
                      handleCopy(item.shortUrl);
                    }}
                    className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95"
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
                <div className="flex flex-col">
                  <a
                    href={item.longUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="line-clamp-1 w-72 text-sm text-gray-500 underline-offset-2 transition-all hover:text-gray-800 hover:underline"
                  >
                    {item.longUrl}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="mx-auto w-full max-w max-w-md px-2.5 py-4 sm:px-0">
      <form onSubmit={getShortLink}>
        <div className="relative flex items-center">
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
            className="lucide lucide-link2 absolute inset-y-0 left-0 my-2 ml-3 w-5 text-gray-400"
          >
            <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
            <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
            <line x1="8" x2="16" y1="12" y2="12"></line>
          </svg>
          <input
            type="url"
            placeholder="https://app.link.sh/google"
            required
            className="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 pr-12 shadow-lg focus:border-black focus:outline-none focus:ring-0 sm:text-sm"
            name="url"
            value={longUrl}
            onChange={(e) => {
              setLongUrl(e.target.value);
            }}
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 peer-focus:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400"
          >
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
              className="lucide lucide-corner-down-left h-4 w-4"
            >
              <polyline points="9 10 4 15 9 20"></polyline>
              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
            </svg>
          </button>
        </div>
      </form>

      <ul className="mt-3 grid gap-2">
        {renderListShortLink()}
        <li style={{ opacity: 1, transform: "none" }}>
          {/* <div
            style={{
              transform: "none",
              userSelect: "none",
              touchAction: "pan-y",
            }}
            className="relative flex max-w-md cursor-grab items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing"
            draggable="false"
            tabIndex={0}
          >
            <div className="flex items-center space-x-3">
              <img
                src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"
                alt="google.logo"
                width={20}
                height={20}
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="blur-0 pointer-events-none h-10 w-10 rounded-full"
                style={{ color: "transparent" }}
              />
              <div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <a
                    className="font-semibold text-blue-800"
                    href="https://www.google.com.vn/?hl=vi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    localhost:8080/public/google
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
                <div className="flex flex-col">
                  <a
                    href="https://www.google.com.vn/?hl=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="line-clamp-1 w-72 text-sm text-gray-500 underline-offset-2 transition-all hover:text-gray-800 hover:underline"
                  >
                    https://www.google.com.vn/?hl=vi
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </li>
        <li
          className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="mb-2.5 flex items-center space-x-2">
              <div className="h-6 w-28 rounded-md bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-20 rounded-md bg-gray-200"></div>
            </div>
            <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
          </div>
        </li>
        <li
          className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="mb-2.5 flex items-center space-x-2">
              <div className="h-6 w-28 rounded-md bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-20 rounded-md bg-gray-200"></div>
            </div>
            <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
          </div>
        </li>
        <li
          className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="mb-2.5 flex items-center space-x-2">
              <div className="h-6 w-28 rounded-md bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200"></div>
              <div className="h-6 w-20 rounded-md bg-gray-200"></div>
            </div>
            <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
