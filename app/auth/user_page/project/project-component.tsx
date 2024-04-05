/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";
import globalIcon from "@/icons/global-svgrepo-com.svg";
import linkIcon from "@/icons/link-minimalistic-svgrepo-com.svg";
import barIcon from "@/icons/bar-chart-2-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

type ProjectComponentData = {
  projectID: number;
  projectName: string;
  projectSlug: string;
  totalLink: number;
  totalClick: number;
};

export const ProjectComponent = ({ data }: { data: ProjectComponentData }) => {
  return (
    <div className="group relative">
      <Link href={`/auth/project_page/${data.projectName}`}>
        <div className="relative flex flex-col justify-between rounded-lg border border-gray-100 bg-white p-6 shadow transition-all hover:shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <img
              alt="user"
              loading="lazy"
              width="48"
              height="48"
              decoding="async"
              className="h-10 w-10 flex-shrink-0 rounded-full"
              src="https://avatar.vercel.sh/clt3tvyqy0000tcgx0lnncd4y"
            />
            <div className="flex flex-col">
              <h2 className="truncate text-lg font-medium text-gray-700">
                {data?.projectName}
              </h2>
              <p className="text-gray-500">{data?.projectSlug}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-500">
              <Image src={globalIcon} alt={"GlobalIcon"}></Image>
              <h2 className="whitespace-nowrap text-sm">1 domain</h2>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Image src={linkIcon} alt={"LinkIcon"}></Image>
              <h2 className="whitespace-nowrap text-sm">
                {data.totalLink || 0} links
              </h2>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Image src={barIcon} alt={"BarIcon"}></Image>
              <h2 className="whitespace-nowrap text-sm">
                {data.totalClick || 0} clicks
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
