/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState } from "react";
import { HeaderHomepage } from "@/components/auth/homepage/header-homepage";
import { MainHomepage } from "@/components/auth/homepage/main-homepage";
import { ShorterLinkHomepage } from "@/components/auth/homepage/shorterlink-homepage";
import { LogoListHomepage } from "@/components/auth/homepage/logolist-homepage";
import { InfomationHomepage } from "@/components/auth/homepage/infomation-homepage";
import { GithubInfoHomepage } from "@/components/auth/homepage/githubinfo-homepage";
import { FooterHomepage } from "@/components/auth/homepage/footer-homepage";
export default function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState("");

  return (
    <div className="app flex min-h-screen flex-col justify-between">
      <div className="app-top-box">
        {/* HEADER */}
        <HeaderHomepage authenticated={authenticated} />
        {/* MAIN */}
        <MainHomepage />
        {/* SHOTERLINK */}
        <ShorterLinkHomepage />
        {/* LOGOLIST */}
        <LogoListHomepage />
        {/* INFOMATION */}
        <InfomationHomepage />
        {/* GITHUBINFO  */}
        <GithubInfoHomepage />
        {/* FOOTER  */}
        <FooterHomepage />\{" "}
      </div>
      {logoutMessage && <div>{logoutMessage}</div>}
    </div>
  );
}
