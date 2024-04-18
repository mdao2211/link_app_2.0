"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { GOOGLE_AUTH_URL, GITHUB_AUTH_URL } from "@/constants/index";
import Link from "next/link";
export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <div className="w-1/2">
        <a href={GOOGLE_AUTH_URL}>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            // onClick={handleGoogleLogin}
          >
            <FcGoogle className="h-5 w-5" />
          </Button>
        </a>
      </div>
      <div className="w-1/2">
        <Link href={GITHUB_AUTH_URL}>
          <Button
            size="lg"
            className="w-full"
            variant="outline"
            // onClick={handleGithubLogin}
          >
            <FaGithub className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
