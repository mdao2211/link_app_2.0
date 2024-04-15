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
import { Modal, ModalContent } from "@nextui-org/react";

export default function EditLinkModal(props: any) {
  const { isOpen, onOpenChange, linkDetail } = props;
  const [longUrl, setLongUrl] = useState(linkDetail.longUrl);
  const [shortUrl, setShortUrl] = useState(linkDetail.shortUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateShortLink = async () => {
    try {
      const randomString = Math.random().toString(36).substring(2, 9);
      setShortUrl(randomString);
      props.setReloadData(randomString);
    } catch (error) {
      console.error("Error generating short link:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // Generate short link
    generateShortLink();
    setLongUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const data = {
      id: linkDetail.id,
      longUrl: longUrl,
      shortUrl: shortUrl,
    };
    try {
      const response = await apiCall(
        "PUT",
        "http://localhost:8080/{projectSlug}/update-long-url",
        data,
      );
      setIsLoading(false);
      onOpenChange();
      console.log(response);
    } catch (error) {
      console.error("Error creating link:", error);
      onOpenChange();
      setError("Failed to create link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      backdrop={"opaque"}
      placement={"center"}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "animate-fade-in fixed inset-0 z-40 bg-gray-100 bg-opacity-50 backdrop-blur-md ",
      }}
    >
      <ModalContent>
        <div className="">
          <div className="z-10 flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 pb-8 pt-8 transition-all">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 px-0 sm:h-10 sm:w-10">
              <Image src={GlobalIcon} alt={GlobalIcon}></Image>
            </div>
            <h3 className="max-w-sm truncate text-lg font-medium">Edit link</h3>
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
                    value={longUrl}
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
                    value={shortUrl}
                  />
                </div>
              </div>
              <div className="py-8 transition-all">
                <button
                  type="submit"
                  className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black"
                >
                  <p>Save</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </ModalContent>
    </Modal>
  );
}
