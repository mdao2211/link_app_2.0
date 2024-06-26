/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import questionIcon from "@/icons/question-circle-svgrepo-com.svg";
import { ChangeEvent, useState } from "react";
import Modal from "@/app/closeModal";
import { createDataProject } from "./create-data";

export const ProjectCard = (props: any) => {
  const [modalShown, setModalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    projectSlug: "",
    totalClick: 0,
    totalLink: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.set("projectName", formData.projectName);
      formDataToSend.set("projectSlug", formData.projectSlug);
      formDataToSend.set("totalClick", formData.totalClick.toString());
      formDataToSend.set("totalLink", formData.totalLink.toString());

      const response = await createDataProject(formDataToSend);
      if (response.ok) setIsLoading(false);
      console.log(response);
      props.getData();
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setModalShown(false);
      // location.reload();
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setModalShown(false);
    }
  };
  // action={createDataProject}
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
        onClick={() => setModalShown(!modalShown)}
      >
        <p>Create project</p>
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          setModalShown(false);
        }}
      >
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-gray-100 bg-opacity-50 backdrop-blur-md"
          onClick={handleOutsideClick}
        >
          <div className="animate-scale-in inset-0 z-40 m-auto max-h-fit w-full max-w-md overflow-hidden border border-gray-200 bg-white p-0 shadow-xl sm:rounded-2xl">
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
              <Image
                className="mr-4"
                src={linkIcon}
                alt="LINK Logo"
                width={50}
                height={50}
              />
              <h3 className="text-lg font-medium">Create a new project</h3>
            </div>
            <div className="flex flex-col space-y-6 bg-gray-50 px-4 py-8 text-left sm:px-16">
              <div>
                <label htmlFor="name" className="flex items-center space-x-2">
                  <p className="block text-sm font-medium text-gray-700">
                    Project Name
                  </p>
                  <Image src={questionIcon} alt={"Question Icon"}></Image>
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <input
                    required
                    autoComplete="off"
                    className="block w-full rounded-md p-2 border-gray-300 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                    placeholder="Strong Company."
                    aria-invalid="true"
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="name" className="flex items-center space-x-2">
                  <p className="block text-sm font-medium text-gray-700">
                    Project Slug
                  </p>
                  <Image src={questionIcon} alt={"Question Icon"}></Image>
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-5 text-gray-500 sm:text-sm">
                    app.link.sh
                  </span>
                  <input
                    required
                    autoComplete="off"
                    pattern="[a-zA-Z0-9\-]+"
                    className="border-gray-300 p-2 text-gray-900 placeholder-gray-300 focus:border-gray-500 focus:ring-gray-500 block w-full rounded-r-md focus:outline-none sm:text-sm"
                    placeholder="Strong"
                    aria-invalid="true"
                    type="text"
                    value={formData.projectSlug}
                    name="projectSlug"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
              >
                {isLoading ? "Creating..." : "Create Project"}
              </button>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </Modal>
    </form>
  );
};
