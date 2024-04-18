import { LoginButton } from "@/components/auth/button/login-button";
import { RegisterButton } from "@/components/auth/button/register-button";
import Image from "next/image";
import linkIcon from "@/public/link_icon.png";
import { GOOGLE_AUTH_URL } from "@/constants";

interface HeaderHomepageProps {
  authenticated: boolean;
}

export const HeaderHomepage = ({ authenticated }: HeaderHomepageProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] py-1 w-full transition-all bg-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <div className=" flex items-center space-x-4 headerContent__left">
            <Image src={linkIcon} alt="LINK Logo" width={50} height={50} />
            <a href="#">
              <p className="text-4xl font-black">LINK</p>
            </a>
          </div>

          <div className="headerContent__right">
            {authenticated ? (
              <ul>
                <a href="/user_page"></a>
              </ul>
            ) : (
              <>
                <LoginButton>
                  <a
                    href={GOOGLE_AUTH_URL}
                    className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                  >
                    Sign in
                  </a>
                </LoginButton>
                <RegisterButton>
                  <a className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black">
                    Register
                  </a>
                </RegisterButton>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
