/* eslint-disable react/react-in-jsx-scope */
"use client";
import Image from "next/image";
import githubLogo from "@/public/github.png";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { RegisterButton } from "@/components/auth/register-button";
export default function homePage() {
  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-[9999] py-1 w-full transition-all bg-gray-300">
        <div className="buttonHidden">
          <button className="fixed right-3 top-3 z-[9999] rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-gray-600"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex h-14 items-center justify-between">
            <div className=" flex items-center space-x-4 headerContent__left">
              <Image src={githubLogo} alt="LINK Logo" width={50} height={50} />
              <a href="#">
                <p className="text-4xl font-black">LINK</p>
              </a>
            </div>

            <div className="headerContent__right">
              <LoginButton>
                <a className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black" >
                  Sign in
                </a>
              </LoginButton>
              <RegisterButton>
                <a className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black" >
                  Register
                </a>
              </RegisterButton>
            </div>
          </div>
        </div>
      </header>
      {/* MAIN */}
      <div className="mx-auto mb-10 mt-40 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0">
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
          Short Links With
          <br />
          <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Superpowers
          </span>
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">
          LINK is the open-source link management infrastructure for modern
          marketing teams.
        </h2>
        <div className="main__buttons mx-auto mt-5 flex max-w-fit space-x-4">
          <a
            className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
            href="signin"
          >
            Start for Free
          </a>
          <a
            className="rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
            href="#"
          >
            Get a Demo
          </a>
        </div>
      </div>
      {/* SHOTERLINK */}
      <div className="mx-auto w-full max-w max-w-md px-2.5 sm:px-0">
        <form>
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-link2 absolute inset-y-0 left-0 my-2 ml-3 w-5 text-gray-400"
            >
              <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
              <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
            <input
              type="url"
              placeholder="https://app.link.sh/google"
              required
              className="peer block w-full rounded-md border border-gray-200 bg-white p-2 pl-10 pr-12 shadow-lg focus:border-black focus:outline-none focus:ring-0 sm:text-sm"
              name="url"
              value=""
            />
            <button
              type="submit"
              className="hover:border-gray-700 hover:text-gray-700 peer-focus:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-corner-down-left h-4 w-4"
              >
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </button>
          </div>
        </form>

        <ul className="mt-3 grid gap-2">
          <li style={{ opacity: 1, transform: "none" }}>
            <div
              style={{
                transform: "none",
                userSelect: "none",
                touchAction: "pan-y",
              }}
              className="relative flex max-w-md cursor-grab items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow-lg transition-[border-color] hover:border-black active:cursor-grabbing"
              draggable="false"
              tabIndex={0}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"
                  alt="google.logo"
                  width={20}
                  height={20}
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  className="blur-0 pointer-events-none h-10 w-10 rounded-full"
                  style={{ color: "transparent" }}
                />
                <div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <a
                      className="font-semibold text-blue-800"
                      href="https://www.google.com.vn/?hl=vi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      link.sh/google
                    </a>
                    <button className="group rounded-full bg-gray-100 p-1.5 transition-all duration-75 hover:scale-105 hover:bg-blue-100 active:scale-95">
                      <span className="sr-only">Copy</span>
                      <svg
                        fill="none"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        className="text-gray-700 transition-all group-hover:text-blue-800"
                      >
                        <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://www.google.com.vn/?hl=vi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="line-clamp-1 w-72 text-sm text-gray-500 underline-offset-2 transition-all hover:text-gray-800 hover:underline"
                    >
                      https://www.google.com.vn/?hl=vi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="mb-2.5 flex items-center space-x-2">
                <div className="h-6 w-28 rounded-md bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <div className="h-6 w-20 rounded-md bg-gray-200"></div>
              </div>
              <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
            </div>
          </li>
          <li
            className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="mb-2.5 flex items-center space-x-2">
                <div className="h-6 w-28 rounded-md bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <div className="h-6 w-20 rounded-md bg-gray-200"></div>
              </div>
              <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
            </div>
          </li>
          <li
            className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="mr-2 h-10 w-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="mb-2.5 flex items-center space-x-2">
                <div className="h-6 w-28 rounded-md bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                <div className="h-6 w-20 rounded-md bg-gray-200"></div>
              </div>
              <div className="h-4 w-60 rounded-md bg-gray-200 sm:w-80"></div>
            </div>
          </li>
        </ul>
      </div>
      {/* LOGOLIST */}
      <div className="my-10">
        <p className="mx-auto max-w-sm text-center text-gray-600 sm:max-w-xl sm:text-lg">
          Giving superpowers to modern teams at world-class companies
        </p>
        <a
          className="mx-auto mt-8 grid w-full max-w-screen-lg grid-cols-2 items-center px-5 md:grid-cols-6 md:px-0"
          href="#"
        >
          <img
            alt="VERCEL"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/vercel.svg"
          />
          <img
            alt="PRISMA"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/prisma.svg"
          />
          <img
            alt="RAYCAST"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/raycast.svg"
          />
          <img
            alt="CLERK"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/clerk.svg"
          />
          <img
            alt="HASHNODE"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/hashnode.svg"
          />
          <img
            alt="PERPLEXITY"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/perplexity.svg"
          />
        </a>
        <a
          className="mx-auto grid w-full max-w-screen-lg grid-cols-2 items-center px-5 md:grid-cols-6 md:px-0"
          href="#"
        >
          <img
            alt="CAL"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/cal.svg"
          />
          <img
            alt="REPLICATE"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/replicate.svg"
          />
          <img
            alt="TINYBIRD"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/tinybird.svg"
          />
          <img
            alt="MUX"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/mux.svg"
          />
          <img
            alt="ATTIO"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/attio.svg"
          />
          <img
            alt="APPWRITE"
            loading="lazy"
            width="520"
            height="182"
            decoding="async"
            data-nimg="1"
            className="blur-0 h-12 grayscale transition-all hover:grayscale-0 md:h-20"
            style={{ color: "transparent" }}
            src="https://dub.co/_static/clients/appwrite.svg"
          />
        </a>
      </div>
      {/* INFOMATION */}
      <div className="border-y border-gray-200 bg-white/10 py-8 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-4 divide-x divide-gray-200 md:grid-cols-3 md:gap-y-0">
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-4xl font-bold md:text-6xl">2,052</p>
            <p className="font-semibold uppercase text-gray-500 md:text-lg">
              Active Companies
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-4xl font-bold md:text-6xl">361.7K</p>
            <p className="font-semibold uppercase text-gray-500 md:text-lg">
              LINKS CREATED
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-4xl font-bold md:text-6xl">19.3M</p>
            <p className="font-semibold uppercase text-gray-500 md:text-lg">
              CLICKS TRACKED
            </p>
          </div>
        </div>
      </div>
      {/* GITHUBINFO  */}
      <div className="border-y border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="mx-auto max-w-md text-center sm:max-w-xl">
            <h2 className="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight">
              Proudly open-source
            </h2>
            <p className="mt-5 text-gray-600 sm:text-lg">
              Our source code is available on GitHub - feel free to read,
              review, or contribute to it however you want!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-10">
          <a href="#" target="_blank" rel="noreferrer">
            <div className="flex items-center">
              <div className="flex h-10 items-center space-x-2 rounded-md border bg-gray-800 p-4 hover:bg-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                <p className="font-medium text-white">Star</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* FOOTER  */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-4  md:grid-cols-3 md:gap-y-0">
            <div>
              <h3 className="text-center font-semibold mb-4">GET IN TOUCH</h3>
              <ul className="text-center">
                <li className="my-2">
                  <a
                    href="#"
                    className=" text-gray-300 hover:text-blue-400 inline-block"
                  >
                    FAQs
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Give us feedback
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-center font-semibold mb-4">LEGAL STUFF</h3>
              <ul className="text-center">
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-center text-lg font-semibold mb-4">
                CONNECT WITH US
              </h3>
              <ul className="text-center">
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Facebook
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Github
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="text-center text-gray-300 hover:text-blue-400 inline-block"
                  >
                    Google +
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>
              2024{" "}
              <a href="#">
                <span className="hover:text-blue-400">© LINK</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
