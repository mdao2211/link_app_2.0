/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import { Card } from "../../ui/card";
import { useState } from "react";
import GlobalIcon from "@/icons/global-svgrepo-com.svg";
import CloseButton from "@/icons/close-bold-svgrepo-com.svg";

export const CreateLinkPopup = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Card>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-gray-100 bg-opacity-50 backdrop-blur-md"
        style={{ pointerEvents: "auto" }}
      >
        {/* headerPopup  */}
        <div
          className="animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full overflow-hidden border border-gray-200 bg-white p-0 shadow-xl sm:rounded-2xl max-w-lg"
          style={{ pointerEvents: "auto" }}
        >
          <button
            className="group absolute right-0 top-0 z-20 m-3 hidden rounded-full p-2 text-gray-500 transition-all duration-75 hover:bg-gray-100 focus:outline-none active:bg-gray-200 md:block"
            onClick={close}
          >
            <Image src={CloseButton} alt={CloseButton}></Image>
          </button>
          <div className="z-10 flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 pb-8 pt-8 transition-all md:sticky md:top-0 md:px-16">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 px-0 sm:h-10 sm:w-10">
              <Image src={GlobalIcon} alt={GlobalIcon}></Image>
            </div>
            <h3 className="max-w-sm truncate text-lg font-medium">
              Create a new link
            </h3>
          </div>
          {/* FORM  */}
          <form className="p-3 grid gap-6 bg-gray-50 pt-8">
            <div className="grid gap-6 px-4 md:px-16">
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="url-51"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Destination URL
                  </label>
                </div>
                <div className="relative mt-1 flex rounded-md shadow-sm">
                  <input
                    id="url-51"
                    placeholder="https://link.co/help/article/what-is-link"
                    className="p-2 border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md focus:outline-none sm:text-sm"
                    aria-invalid="true"
                    type="url"
                    value=""
                    name="url"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="url-51"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Short Link
                  </label>
                </div>
                <div className="relative mt-1 flex rounded-md shadow-sm">
                  <select className="max-w-[16rem] rounded-l-md border border-r-0 border-gray-300 bg-gray-50 pl-4 pr-8 text-sm text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0">
                    <option value="dub.sh">dub.sh</option>
                    <option value="link.st">link.st</option>
                    <option value="spti.fi">spti.fi</option>
                    <option value="git.new">git.new</option>
                    <option value="amzn.id">amzn.id</option>
                  </select>
                  <input
                    id="url-51"
                    placeholder="facebook"
                    className="p-2 border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md focus:outline-none sm:text-sm"
                    aria-invalid="true"
                    type="url"
                    value=""
                    name="url"
                  />
                </div>
              </div>
              <div className="py-8 transition-all">
                <button
                  type="submit"
                  className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
                >
                  <p>Create link</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};
