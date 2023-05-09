import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { GiArcheryTarget } from "react-icons/gi";

export default function RankList() {
    const showaccordian = (elem) => {
        var mdiv = elem.target.closest(".timeline-card").querySelector('.timeline-body');
        mdiv.classList.toggle("hidden");
        var arrw = elem.target.closest(".timeline-card").querySelector('.header-arrow');
        arrw.classList.toggle("rotate-180");
    }


    return (
        <>

            <Head>
                <title>Rank List | GyanOK.com</title>
                <meta name="description" content="Rank List" />
                <meta name="keywords" content="Rank List" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Rank List | GyanOK.com" />
                <meta property="twitter:description" content="Rank List" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Rank List | GyanOK.com" />
                <meta property="og:description" content="Rank List" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5 relative">
                <div className="container">
                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                            <Link href="/dashboard" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-white">Rank List</h4>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center items-strech justify-between bg-gradient-to-r from-[#ffffff]  to-[#fff1ba] rounded-sm mb-5 px-3 py-1 lg:px-5">
                            <div className="flex-grow ">

                                <p className="text-gray-500 flex items-center">My Level</p>
                                <h2 className="text-4xl  text-gray-900">Newbie</h2>
                                <p className="text-yellow-500">Winnings: 100</p>
                                <p className=" text-gray-800 text-sm">
                                    Complete all task to move to next level.
                                </p>
                            </div>
                            <div className="flex-shrink-0 ">
                                <Image src="/images/level1.png" width={120} height={120} alt="award" />
                            </div>
                        </div>

                        <ol className="relative border-l border-gray-200 space-y-8 ml-6 ">
                            <li className="ml-9 timeline-card">
                                <Image src="/images/level1.png" width={70} height={70} className="absolute flex items-center justify-center  -left-9 -translate-y-3 " alt="rank list" />

                                <div className="cursor-pointer header pb-3" onClick={showaccordian}>
                                    <h4 className="flex justify-between items-center text-xl mr-2 text-white">Newbie<FaAngleUp className="header-arrow" />
                                    </h4>
                                    {/* <time className="block mb-2 text-sm font-normal  text-gray-300 ">Top 500 players in the ranked leaderboard</time> */}

                                </div>
                                <div className="timeline-body ">
                                    <ul className="space-y-2">
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-green-100 group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Complete Profile</span>
                                                    <p className="text-xs text-gray-500">UPI, Image, KYC, Age & Address</p>
                                                    <Link href="#" className="text-xs underline">Go to Profile</Link>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium text-green-800">
                                                    <BsCheckCircleFill />
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Add Cash ₹1 </span>

                                                    <Link href="#" className="text-xs underline">Go to Wallet</Link>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Tournaments</span>
                                                    <p className="text-xs text-gray-500">0/5 Completed</p>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black"> Competitions</span>
                                                    <p className="text-xs text-gray-500">0/5 Completed</p>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black"> Winnings </span>

                                                    <p className="text-xs">Win upto ₹10 </p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>

                                    </ul>
                                </div>


                            </li>

                            {/* level 2 */}
                            <li className="ml-9 timeline-card">
                                <Image src="/images/level2.png" width={70} height={70} className="absolute flex items-center justify-center  -left-9 -translate-y-3 " alt="rank list" />

                                <div className="cursor-pointer header pb-3" onClick={showaccordian}>
                                    <h4 className="flex justify-between items-center text-xl mr-2 text-white">Learning<FaAngleUp className="header-arrow" />
                                    </h4>
                                    {/* <time className="block mb-2 text-sm font-normal  text-gray-300 ">Top 500 players in the ranked leaderboard</time> */}

                                </div>
                                <div className="timeline-body ">
                                    <ul className="space-y-2">
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-green-100 group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Tournament</span>
                                                    <p className="text-xs text-gray-500">0/20 Completed</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium text-green-800">
                                                    <BsCheckCircleFill />
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Competition </span>
                                                    <p className="text-xs text-gray-500">0/20 Completed</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Add Cash ₹10 </span>

                                                    <Link href="#" className="text-xs underline">Go to Wallet</Link>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black"> Winnings </span>

                                                    <p className="text-xs">10 - 100</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>

                                    </ul>
                                </div>


                            </li>



                            {/* level 3 */}
                            <li className="ml-9 timeline-card">
                                <Image src="/images/level3.png" width={70} height={70} className="absolute flex items-center justify-center  -left-9 -translate-y-3 " alt="rank list" />

                                <div className="cursor-pointer header pb-3" onClick={showaccordian}>
                                    <h4 className="flex justify-between items-center text-xl mr-2 text-white">Smart<FaAngleUp className="header-arrow" />
                                    </h4>
                                    {/* <time className="block mb-2 text-sm font-normal  text-gray-300 ">Top 500 players in the ranked leaderboard</time> */}

                                </div>
                                <div className="timeline-body ">
                                    <ul className="space-y-2">
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-green-100 group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Tournament</span>
                                                    <p className="text-xs text-gray-500">0/50 Completed</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium text-green-800">
                                                    <BsCheckCircleFill />
                                                </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Competition </span>
                                                    <p className="text-xs text-gray-500">0/50 Completed</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Withdarw ₹10 </span>

                                                    <Link href="#" className="text-xs underline">Go to Wallet</Link>
                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center justify-between px-3 py-2 lg:text-base  text-sm rounded-sm bg-white group">
                                                <div className="flex-1 ">
                                                    <span className="block whitespace-nowrap text-black">Winnings</span>

                                                    <p className="text-xs">100- 500</p>

                                                </div>

                                                <span className="flex-shrink-0  ml-3 text-lg font-medium"></span>

                                            </div>
                                        </li>

                                    </ul>
                                </div>


                            </li>

                            {/* level 4 */}
                            <li className="ml-9 timeline-card">
                                <Image src="/images/level4.png" width={70} height={70} className="absolute flex items-center justify-center  -left-9 -translate-y-3 " alt="rank list" />

                                <div className="cursor-pointer header pb-3" onClick={showaccordian}>
                                    <h4 className="flex justify-between items-center text-xl mr-2 text-white">Master<FaAngleUp className="header-arrow" />
                                    </h4>
                                    {/* <time className="block mb-2 text-sm font-normal  text-gray-300 ">Top 500 players in the ranked leaderboard</time> */}

                                </div>
                                <div className="timeline-body">
                                    <blockquote className="p-5 mb-3 text-center bg-white rounded-sm ">
                                        <AiFillLock className="w-12 h-12 mb-1" />
                                        <p className="text-black leading-relaxed text-lg">Lock Level</p>
                                        <p className=" text-gray-500">Level will be unlock, when you are eligible for this level</p>
                                    </blockquote>
                                </div>


                            </li>

                                  {/* level 5 */}
                                  <li className="ml-9 timeline-card">
                                <Image src="/images/level5.png" width={70} height={70} className="absolute flex items-center justify-center  -left-9 -translate-y-3 " alt="rank list" />

                                <div className="cursor-pointer header pb-3" onClick={showaccordian}>
                                    <h4 className="flex justify-between items-center text-xl mr-2 text-white">Expert<FaAngleUp className="header-arrow" />
                                    </h4>
                                    {/* <time className="block mb-2 text-sm font-normal  text-gray-300 ">Top 500 players in the ranked leaderboard</time> */}

                                </div>
                                <div className="timeline-body">
                                    <blockquote className="p-5 mb-3 text-center bg-white rounded-sm ">
                                        <AiFillLock className="w-12 h-12 mb-1" />
                                        <p className="text-black leading-relaxed text-lg">Lock Level</p>
                                        <p className=" text-gray-500">Level will be unlock, when you are eligible for this level</p>
                                    </blockquote>
                                </div>


                            </li>

                        </ol>
                    </div>
                </div>
            </section>

        </>
    )
}