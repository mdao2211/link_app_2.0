"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import GlobalIcon from "@/icons/global-svgrepo-com.svg";
import { apiCall } from "@/service/axios";

export function DialogDemo() {
  const [isCreateLinkOpen, setIsCreateLinkOpen] = useState(false);

  const toggleCreateLink = () => {
    setIsCreateLinkOpen(!isCreateLinkOpen);
  };
  const [data, setData] = useState({
    longUrl: "",
    shortUrl: "",
  });
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    getShortLink({ longUrl: e.target.value });
  };
  const getShortLink = async (data: any) => {
    try {
      const response = await apiCall(
        "POST",
        "http://localhost:8080/{projectSlug}/create-short",
        data,
      );
      console.log(response);
    } catch {}
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex">
          <button
            className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
            onClick={toggleCreateLink}
          >
            <p className="flex-1 text-left">Create link</p>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="">
            <div className="z-10 flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 pb-8 pt-8 transition-all">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 px-0 sm:h-10 sm:w-10">
                <Image src={GlobalIcon} alt={GlobalIcon}></Image>
              </div>
              <h3 className="max-w-sm truncate text-lg font-medium">
                Create a new link
              </h3>
            </div>
            {/* FORM  */}
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 bg-gray-50 pt-8 p-4"
            >
              <div>
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
                      value={data.longUrl}
                      name="longUrl"
                      onChange={handleInputChange}
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
                    {/* <select
                      value={data.domain}
                      required
                      onChange={handleSelectChange}
                      className="max-w-[16rem] rounded-l-md border border-r-0 border-gray-300 bg-gray-50 pl-4 pr-8 text-sm text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                    >
                      <option value="dub.sh">dub.sh</option>
                      <option value="link.st">link.st</option>
                      <option value="spti.fi">spti.fi</option>
                      <option value="git.new">git.new</option>
                      <option value="amzn.id">amzn.id</option>
                    </select> */}
                    <input
                      id="url-51"
                      placeholder="facebook"
                      className="p-2 border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md focus:outline-none sm:text-sm"
                      aria-invalid="true"
                      type="text"
                      name="shortUrl"
                      disabled
                      value={data.shortUrl}
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
