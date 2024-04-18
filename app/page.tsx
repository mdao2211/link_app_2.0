/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { Suspense, useState } from "react";
import { HeaderHomepage } from "@/components/auth/homepage/header-homepage";
import { MainHomepage } from "@/components/auth/homepage/main-homepage";
import { ShorterLinkHomepage } from "@/components/auth/homepage/shorterlink-homepage";
import { LogoListHomepage } from "@/components/auth/homepage/logolist-homepage";
import { InfomationHomepage } from "@/components/auth/homepage/infomation-homepage";
import { GithubInfoHomepage } from "@/components/auth/homepage/githubinfo-homepage";
import { FooterHomepage } from "@/components/auth/homepage/footer-homepage";
import StarsCanvas from "@/components/dynamic-effects/Stars";
// import FadeIn from "react-fade-in";

import EarthCanvas from "@/components/dynamic-effects/Earth";
import { ToastContainer } from "react-toastify";
export default function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");


  return (
    <div className="app flex min-h-screen flex-col justify-between">
      <div className="app-top-box">
        {/* HEADER */}
        <HeaderHomepage authenticated={authenticated} />
        {/* <FadeIn transitionDuration={400}> */}
          {/* MAIN */}
          <div>
            <MainHomepage />
          </div>
          {/* SHOTERLINK */}
          <div>
            <ShorterLinkHomepage />
          </div>
          <div className="Earth relative">
            {/* EARTH  */}
            <EarthCanvas />
            {/* Stars  */}
            <StarsCanvas />
          </div>
          {/* LOGOLIST */}
          <div>
            <LogoListHomepage />
          </div>
          {/* INFOMATION */}
          <div>
            <InfomationHomepage />
          </div>
          {/* GITHUBINFO  */}
          <div>
            <GithubInfoHomepage />
          </div>
          {/* CONTACT */}
          {/* <Contact /> */}
          {/* FOOTER  */}
          <div>
            <FooterHomepage />
          </div>
        {/* </FadeIn> */}
      </div>
      {logoutMessage && <div>{logoutMessage}</div>}
      <ToastContainer />
    </div>
  );
}
