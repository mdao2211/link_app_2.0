/* eslint-disable @next/next/no-img-element */
// import { Button } from "@/components/ui/button";
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
import settingIcon from "@/icons/settings-svgrepo-com.svg";
import trashIcon from "@/icons/trash-svgrepo-com.svg";
import { apiCall } from "@/service/axios";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalContent,
} from "@nextui-org/react";
import dotsMenu from "@/icons/interface-ui-dots-menu-svgrepo-com.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditLinkModal from "./edit-link";
export function DeleteLink(props: any) {
  const { open, close, data, getListLink } = props;
  const [isCreateLinkOpen, setIsCreateLinkOpen] = useState(false);

  const toggleCreateLink = () => {
    setIsCreateLinkOpen(!isCreateLinkOpen);
  };
  const [isEditLinkOpen, setIsEditLinkOpen] = useState(false);

  const toggleEditLink = () => {
    setIsEditLinkOpen(!isEditLinkOpen);
  };

  const handleDelete = () => {
    toast.success("Delete successful!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newData = {
      projectID: data.projectID.projectID,
      shortUrl: data.shortUrl,
    };
    console.log(newData);

    try {
      const response = await apiCall(
        "DELETE",
        "http://localhost:8080/{projectSlug}/delete-url",
        newData,
      );
      toast.success("Delete successful!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      props.setReloadData(data.shortUrl);
      // setIsCreateLinkOpen(false); // Close dialog after successful submission
    } catch (error) {
      console.error("Error creating link:", error);
    } finally {
      getListLink();
      setIsCreateLinkOpen(false);
    }
  };
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Image src={dotsMenu} alt={dotsMenu}></Image>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="Edit"
            onClick={toggleEditLink}
            className="text-danger"
            color="danger"
          >
            <div
              onClick={toggleEditLink}
              className="group bg-white border border-black flex w-full items-center justify-center space-x-2 rounded-md  text-sm transition-all h-9 px-2 font-medium"
            >
              <Image src={settingIcon} alt={settingIcon}></Image>
              <p className="flex-1 text-left">Edit</p>
            </div>
          </DropdownItem>
          <DropdownItem
            key="delete"
            onClick={toggleCreateLink}
            className="text-danger"
            color="danger"
          >
            <div
              onClick={toggleCreateLink}
              className="group bg-white border border-black flex w-full items-center justify-center space-x-2 rounded-md  text-sm transition-all h-9 px-2 font-medium"
            >
              <Image src={trashIcon} alt={trashIcon}></Image>
              <p className="flex-1 text-left">Delete</p>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal
        backdrop={"opaque"}
        placement={"center"}
        isOpen={isCreateLinkOpen}
        onOpenChange={toggleCreateLink}
        classNames={{
          backdrop:
            "animate-fade-in fixed inset-0 z-40 bg-gray-100 bg-opacity-50 backdrop-blur-md ",
        }}
      >
        <ModalContent>
          <div>
            <div className="flex rounded-md bg-white flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 text-center sm:px-16 ">
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
              <h3 className="text-lg font-medium">Delete link</h3>
              <p className="text-sm text-gray-500">
                Warning: Deleting this link will remove all of its stats. This
                action cannot be undone.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 text-left sm:px-16"
            >
              <div>
                <label
                  htmlFor="verification"
                  className="block text-sm text-gray-700"
                >
                  To verify, type{" "}
                  <span className="font-semibold">delete link</span> below
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    id="verification"
                    pattern="delete link"
                    autoComplete="off"
                    className="block py-2 w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                    type="text"
                    name="verification"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-red-500 bg-red-500 text-white hover:bg-white hover:text-red-500"
                // onSubmit={handleDelete}
              >
                <p>Confirm delete</p>
              </button>
            </form>
          </div>
        </ModalContent>
      </Modal>
      {isEditLinkOpen && (
        <EditLinkModal
          setReloadData={props.setReloadData}
          linkDetail={data}
          isOpen={isEditLinkOpen}
          onOpenChange={toggleEditLink}
        />
      )}
      {/* <ToastContainer /> */}
    </>
  );
}
