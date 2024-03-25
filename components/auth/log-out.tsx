/* eslint-disable react/jsx-no-undef */
import { Button } from "../ui/button";
import { handleSignOut } from "@/actions/auth";
import logOutIcon from "@/icons/sign-out-2-svgrepo-com.svg";
import Image from "next/image";

export function SignOut() {
  return (
    <form action={handleSignOut} className="w-full">
      <Button className="w-full rounded-md p-2 text-sm transition-all duration-75 bg-slate-500	 hover:bg-gray-300 hover:text-black active:bg-gray-200">
        <a className="flex items-center justify-start space-x-2">
          <Image src={logOutIcon} alt={"LogOut"}></Image>
          <p>Sign Out</p>
        </a>
      </Button>
    </form>
  );
}
