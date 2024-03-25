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
import GlobalIcon from "@/icons/global-svgrepo-com.svg";
import qrCodeIcon from "@/icons/qr-code-scan-svgrepo-com.svg";
export function QrCode() {
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
            className="group flex w-full items-center justify-center space-x-2 rounded-md border text-sm transition-all border-transparent text-gray-500 duration-75 hover:bg-gray-100 h-9 px-2 font-medium"
          >
            <Image src={qrCodeIcon} alt={qrCodeIcon}></Image>
            <p className="flex-1 text-left">QR Code</p>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div>
            <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
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
              <h3 className="text-lg font-medium">Download QR Code</h3>
            </div>
            <div className="flex flex-col space-y-6 bg-gray-50 py-6 text-left">
              <div className="mx-auto rounded-lg border-2 border-gray-200 bg-white p-4">
                <svg height="128" width="128" viewBox="0 0 29 29">
                  <path
                    fill="#ffffff"
                    d="M0,0 h29v29H0z"
                    shape-rendering="crispEdges"
                  ></path>
                  <path
                    fill="#000000"
                    d="M0 0h7v1H0zM8 0h1v1H8zM12 0h1v1H12zM15 0h1v1H15zM18 0h1v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM11 1h1v1H11zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h2v1H9zM12 2h2v1H12zM16 2h1v1H16zM18 2h2v1H18zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h2v1H10zM13 3h2v1H13zM16 3h1v1H16zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM11 4h3v1H11zM16 4h1v1H16zM18 4h2v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h2v1H9zM12 5h2v1H12zM15 5h1v1H15zM17 5h1v1H17zM19 5h2v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM11 7h2v1H11zM15 7h1v1H15zM17 7h4v1H17zM2 8h1v1H2zM4 8h3v1H4zM8 8h2v1H8zM12 8h4v1H12zM18 8h1v1H18zM20 8h2v1H20zM25 8h1v1H25zM28,8 h1v1H28zM0 9h2v1H0zM4 9h1v1H4zM9 9h2v1H9zM12 9h2v1H12zM15 9h1v1H15zM17 9h3v1H17zM22 9h1v1H22zM25 9h2v1H25zM28,9 h1v1H28zM0 10h8v1H0zM9 10h1v1H9zM23 10h2v1H23zM26,10 h3v1H26zM0 11h1v1H0zM2 11h1v1H2zM8 11h1v1H8zM21 11h3v1H21zM25 11h1v1H25zM27 11h1v1H27zM0 12h1v1H0zM3 12h2v1H3zM6 12h1v1H6zM8 12h2v1H8zM19 12h1v1H19zM22 12h2v1H22zM3 13h1v1H3zM5 13h1v1H5zM7 13h2v1H7zM20 13h4v1H20zM27,13 h2v1H27zM0 14h1v1H0zM4 14h3v1H4zM8 14h1v1H8zM20 14h1v1H20zM22 14h2v1H22zM26,14 h3v1H26zM1 15h3v1H1zM5 15h1v1H5zM19 15h2v1H19zM23 15h1v1H23zM28,15 h1v1H28zM1 16h3v1H1zM6 16h1v1H6zM8 16h1v1H8zM20 16h4v1H20zM25 16h1v1H25zM28,16 h1v1H28zM4 17h1v1H4zM8 17h1v1H8zM20 17h1v1H20zM26,17 h3v1H26zM0 18h1v1H0zM3 18h4v1H3zM20 18h2v1H20zM24 18h2v1H24zM27,18 h2v1H27zM1 19h3v1H1zM7 19h2v1H7zM11 19h1v1H11zM13 19h2v1H13zM18 19h1v1H18zM20 19h1v1H20zM22 19h3v1H22zM27,19 h2v1H27zM0 20h1v1H0zM5 20h2v1H5zM9 20h1v1H9zM11 20h2v1H11zM14 20h2v1H14zM18 20h1v1H18zM20 20h5v1H20zM27,20 h2v1H27zM8 21h1v1H8zM14 21h1v1H14zM19 21h2v1H19zM24 21h1v1H24zM28,21 h1v1H28zM0 22h7v1H0zM12 22h3v1H12zM16 22h1v1H16zM18 22h3v1H18zM22 22h1v1H22zM24 22h1v1H24zM26,22 h3v1H26zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM11 23h2v1H11zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM27,23 h2v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h5v1H8zM14 24h1v1H14zM17 24h2v1H17zM20 24h6v1H20zM27 24h1v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM9 25h1v1H9zM13 25h1v1H13zM15 25h1v1H15zM17 25h2v1H17zM20 25h2v1H20zM24 25h1v1H24zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h2v1H8zM11 26h1v1H11zM14 26h6v1H14zM23 26h3v1H23zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM9 27h1v1H9zM11 27h1v1H11zM13 27h2v1H13zM18 27h1v1H18zM20 27h1v1H20zM23 27h1v1H23zM25 27h1v1H25zM27 27h1v1H27zM0 28h7v1H0zM10 28h1v1H10zM17 28h1v1H17zM20 28h2v1H20zM24 28h2v1H24zM27,28 h2v1H27z"
                    shape-rendering="crispEdges"
                  ></path>
                  <image
                    href="https://app.dub.co/_static/logo.svg"
                    height="7.25"
                    width="7.25"
                    x="10.875"
                    y="10.875"
                    preserveAspectRatio="none"
                  ></image>
                </svg>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
