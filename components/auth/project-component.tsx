/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client"
import globalIcon from "@/icons/global-svgrepo-com.svg"
import linkIcon from "@/icons/link-minimalistic-svgrepo-com.svg"
import barIcon from "@/icons/bar-chart-2-svgrepo-com.svg"
import Image from "next/image"
import Link from "next/link"
export const ProjectComponent = () => {

    return (
        <div className="group relative">

            <Link href="/auth/project_page">
            <div className="relative flex flex-col justify-between space-y-10 rounded-lg border border-gray-100 bg-white p-6 shadow transition-all hover:shadow-lg">
            <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                <img alt="user" loading="lazy" width="48" height="48" decoding="async"  className="blur-0 h-10 w-10 flex-shrink-0 overflow-hidden rounded-full" src="https://avatar.vercel.sh/clt3tvyqy0000tcgx0lnncd4y" style={{color: 'transparent'}}/>
                <div>
                    <h2 className="max-w-[200px] truncate text-lg font-medium text-gray-700">LINK</h2>
                </div>
                </div>
                <span className="max-w-fit rounded-full border px-2 py-px text-xs font-medium capitalize whitespace-nowrap border-black bg-black text-white">free</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-500">
                    <Image src={globalIcon} alt={"GlobalIcon"}></Image>
                    <h2 className="whitespace-nowrap text-sm">1 domain</h2>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <Image src={linkIcon} alt={"LinkIcon"}></Image>
                    <h2 className="whitespace-nowrap text-sm">1 links</h2>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                    <Image src={barIcon} alt={"BarIcon"}></Image>
                    <h2 className="whitespace-nowrap text-sm">1 clicks</h2>
                </div>
            </div>
            </div>
            </Link>
            
        </div>
    )
}