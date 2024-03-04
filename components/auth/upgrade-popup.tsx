/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import { Card } from "../ui/card";
import { useState } from "react";
import checkGoodMark from "@/icons/accept-check-good-mark-ok-tick-svgrepo-com.svg";
export const UpgradePopup = () => {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const closeUpgradePopup = () => {
    setIsUpgradeOpen(false);
  };

  return (
    <Card>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-gray-100 bg-opacity-50 backdrop-blur-md"
        style={{ pointerEvents: "auto" }}
        onClick={closeUpgradePopup}
      >
        {/* headerPopup  */}
        <div
          className="animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full overflow-hidden border border-gray-200 bg-white p-0 shadow-xl sm:rounded-2xl max-w-lg"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-8 sm:px-16">
            <div style={{ opacity: "1", transform: "none" }}>
              <Image
                className="mr-4"
                src={linkIcon}
                alt="LINK Logo"
                width={50}
                height={50}
              ></Image>
            </div>
            <h3
              className="text-lg font-medium"
              style={{ opacity: "1", transform: "none" }}
            >
              Upgrade to Pro
            </h3>
            <p
              className="text-center text-sm text-gray-500"
              style={{ opacity: "1", transform: "none" }}
            >
              Enjoy higher limits and extra features with LINK Pro
            </p>
          </div>
          {/* footerPopup */}
          <div className="bg-gray-50 px-4 py-6 text-left sm:px-16">
            <div
              className="mb-4 mt-6 flex flex-col"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium text-gray-900">Pro Yearly</h4>
                  <span className="max-w-fit rounded-full border px-2 py-px whitespace-nowrap border-gray-400 text-gray-500 text-sm font-normal normal-case">
                    $19/month, billed yearly
                  </span>
                </div>
              </div>
              <div className="my-4 flex flex-col space-y-2">
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> 1,000 link/month</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> 50K tracked clicks/month</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> 1-year analytics retention</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> 10 custom domains</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> 5 users</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> Basic support</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> Root domain redirect</span>
                </div>
                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <Image src={checkGoodMark} alt={checkGoodMark}></Image>
                  <span> Advanced link features</span>
                </div>
              </div>
            </div>
            {/* upgradeButton  */}
            <button className="group flex h-10 w-full items-center justify-center space-x-2 rounded-md border px-4 text-sm transition-all border-black bg-black text-white hover:bg-white hover:text-black">
              Upgrade to Pro Yearly
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
