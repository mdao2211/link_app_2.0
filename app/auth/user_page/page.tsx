/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import { ProjectCard } from "@/components/auth/userpage/create-project";
import { ProjectComponent } from "@/components/auth/projectpage/project-component";
import { SignOut } from "@/components/auth/log-out";
import { UserHeader } from "@/app/auth/user_page/user/header";
import User from "./user/page";

export default function UserPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER  */}
      <User />
      {/* PROJECT  */}
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">My Projects</h1>
            <ProjectCard />
          </div>
        </div>
      </div>
      {/* PROJECTCOMPONENTS */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <ProjectComponent />
        </div>
      </div>
    </div>
  );
}
