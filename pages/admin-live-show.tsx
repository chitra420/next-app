import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

import {  FaShareSquare } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";



export default function AdminLiveShow() {


    return (
        <>
            <Head>
                <title>Admin Live Show | By Gyanok</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Admin Live Show | By Gyanok" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Admin Live Show | By Gyanok" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
           
            <section className="pb-5">
                
                <div className="bg-gray-800 mb-3 py-3 sticky top-0 z-10">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <h5 className="font-semi-bold text-white">Live Show</h5>
                            <Link href="/live-show" className="px-3 py-1 text-sm font-medium text-center text-black bg-gray-100 rounded-sm hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300  "><MdExitToApp className="mr-1" />Exit</Link>
                        </div>
                    </div>
                </div>
                    <div className="container">
                        <div className="w-full">
                            <div className="bg-[#2c3344] shadow-lg p-3 border-b rounded-sm mb-3">
                                <div className="group relative text-center">
                                    <h3 className="text-white mb-3 ">To Play the quiz</h3>
                                  
                                    <p className="mb-3 text-yellow-300">1. Use any device to open website</p>
                                    <div className="bg-white rounded-sm p-3 text-center mb-5">
                                        <h5 className="text-blue-800"> https://gyanok.com   </h5>
                                    </div>
                                    <p className="mb-3 text-yellow-300">2. Enter the game code </p>
                                    <div className="bg-white rounded-sm p-3 text-center">
                                        <h5 className="text-blue-800">321456  </h5>
                                    </div>
                                </div>

                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-1/2 h-px my-5 bg-gray-600 border-0 " />
                                    <span className="absolute px-3 font-medium text-gray-100 -translate-x-1/2 bg-[#2c3344] left-1/2 ">OR </span>
                                </div>

                                <div className="text-center mb-3">
                                 <a href="#" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-1 rounded   border border-yellow-300"><FaShareSquare className="mr-1" />Share to other platform</a>

                                </div>
                            </div>

                            <Link href="#" className="gradiant-btn w-full mb-5 ">START SHOW</Link>

                            <h5 className="text-white mb-3 text-center">Waiting For Participants ...</h5>
                            <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-2 lg:gap-3 overflow-y-auto max-h-[450px] lg:max-h-[300px]">
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />
                                    </div>
                                    <p className="text-[12px] text-sm text-white">Sunil singh rawat</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>

                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>

                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />

                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                                <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#2c3344]">
                                    <div className="relative w-fit mx-auto mb-1">
                                        <Image src="/images/boy.png" width={36} height={36} alt="user" className="rounded-full w-[36px] h-[36px] border-2 p-0.5 border-blue-500" />
                                    </div>
                                    <p className="text-[12px] text-sm text-white">Himanshu Verma</p>
                                    <p className="text-xs text-yellow-300">Level 1 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
        </>
    )
}