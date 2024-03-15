/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import trashIcon from "@/icons/trash-svgrepo-com.svg";
export function DeleteLink() {
  const [isCreateLinkOpen, setIsCreateLinkOpen] = useState(false);

  const toggleCreateLink = () => {
    setIsCreateLinkOpen(!isCreateLinkOpen);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <button
            type="button"
            className="group flex w-full items-center justify-center space-x-2 rounded-md border text-sm transition-all border-transparent bg-white text-red-500 hover:bg-red-600 hover:text-white h-9 px-2 font-medium"
          >
            <Image src={trashIcon} alt={trashIcon}></Image>
            <p className="flex-1 text-left">Delete</p>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div>
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 text-center sm:px-16">
              <img
                alt="dub.sh"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                data-nimg="1"
                className="blur-0 h-8 w-8 rounded-full sm:h-10 sm:w-10"
                src="https://www.google.com/s2/favicons?sz=64&amp;domain_url=dub.sh"
              />
              <h3 className="text-lg font-medium">Delete dub.sh/g8qqW6k</h3>
              <p className="text-sm text-gray-500">
                Warning: Deleting this link will remove all of its stats. This
                action cannot be undone.
              </p>
            </div>
            <form className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 text-left sm:px-16">
              <div>
                <label
                  htmlFor="verification"
                  className="block text-sm text-gray-700"
                >
                  To verify, type{" "}
                  <span className="font-semibold">dub.sh/g8qqW6k</span> below
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    id="verification"
                    pattern="dub.sh/g8qqW6k"
                    autoComplete="off"
                    className="block py-2 w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                    type="text"
                    name="verification"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500"
              >
                <p>Confirm delete</p>
              </button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
