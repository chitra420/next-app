import { Tabs } from "flowbite-react";
import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

import { MdOutlineLocalActivity } from "react-icons/md";



export default function AllUserProfile() {
    const [openTab, setOpenTab] = useState(1);


    return (
        <>
            <Head>
                <title>User Profile | GyanOK.com</title>
                <meta name="description" content="User Profile " />
                <meta name="keywords" content="Dashboard" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="User Profile  | GyanOK.com" />
                <meta property="twitter:description" content="User Dashboard" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="User Profile  | GyanOK.com" />
                <meta property="og:description" content="User Dashboard" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5">
                <div className="container">
                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3 flex items-center ">
                            <Link href="/dashboard" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-lg text-white">Back</h4>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 shadow-sm  mb-5 ">
                        <div className="relative flex-shrink-0" >
                            <Image src="/images/user-profile.jpg" width={80} height={80} alt="user" className="rounded-full w-[80px] h-[80px] object-cover border-2 border-white" />
                            <Image src="/images/level1.png" width={45} height={45} alt="user" className="absolute -bottom-3 right-0 rounded-full" />
                        </div>
                        <div className="py-2 overflow-hidden">
                            <h2 className="lg:text-2xl text-white text-xl truncate">Himanshu Verma  </h2>
                            <p className="text-gray-300 text-sm mb-1">xxxxxx947</p>
                            <span className="bg-blue-50 text-blue-600 text-sm font-medium  px-3 py-1 rounded-lg  border border-blue-400">
                                Newbie
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="flex justify-between mt-3 mb-3 text-gray-300">
                            <div className="text-center lg:text-left w-1/3">
                                <Link href="/all-user-search-list">
                                    <span className="text-2xl text-slate-100">120k </span>
                                    <p className="lg:text-base text-sm">Followers</p>
                                </Link>

                            </div>
                            <div className="text-center lg:text-left w-1/3">
                                <Link href="/all-user-search-list">
                                    <span className="text-2xl text-slate-100">120k </span>
                                    <p className="lg:text-base text-sm">Following</p>
                                </Link>

                            </div>
                            <div className="text-center lg:text-left w-1/3">
                                <Link href="/all-user-search-list">
                                    <span className="text-2xl text-slate-100">120k </span>
                                    <p className="lg:text-base text-sm">Mate</p>
                                </Link>

                            </div>
                        </div>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  font-medium rounded-sm text-sm px-5 py-2 w-full text-center  mb-2">Following</button>

                    </div>

                    <div className="w-full">
                        <ul className="flex space-x-3 mb-0 list-none flex-wrap pb-4 flex-row gap-3" role="tablist">
                            <li className="  text-center">
                                <Link className={"py-3 block " + (openTab === 1 ? "text-white  border-b " : "text-slate-300  border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#statistics_tab" role="tablist" ><BsGraphUp /> Statistics </Link>
                            </li>
                            <li className="last:mr-0  text-center">
                                <Link className={"py-3 block " + (openTab === 2 ? "text-white  border-b " : "text-slate-300  border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#activity_tab" role="tablist" ><MdOutlineLocalActivity /> Activity </Link>
                            </li>
                        </ul>
                        <div className="tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="statistics_tab">
                                <blockquote className="p-5 mb-3 text-center bg-amber-100 border-x-4 border-amber-500 text-red-600 rounded-sm ">
                                    <AiFillLock className="w-12 h-12 mb-1" />
                                    <h5 className="mb-2 font-semibold">Follow profile to view stats</h5>
                                    <p className="font-medium  ">You can view their stats, recent games and activity</p>
                                </blockquote>


                                <div className="w-full border-b bg-white  rounded-sm shadow p-3 mb-3">
                                    <h5 className="mb-5 font-semibold text-gray-900">
                                        Comparison
                                    </h5>
                                    <div className="grid grid-cols-3 gap-1 mb-3 border-b border-dotted border-gray-500 pb-3">
                                        <p className="text-gray-500 text-sm"></p>
                                        <p className="text-blue-900 ">Himanshu Verma</p>
                                        <p className="text-green-600">Sunil Singh Rawat</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mb-3 border-b border-dotted border-gray-500 pb-3">
                                        <p className="text-gray-500 text-sm">Rank</p>
                                        <p className="text-blue-900 ">8562</p>
                                        <p className="text-green-600">478</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mb-3 border-b border-dotted border-gray-500 pb-3">
                                        <p className="text-gray-500 text-sm">Level</p>
                                        <p className="text-blue-900">Platinum</p>
                                        <p className="text-green-600">Diamond</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mb-3 border-b border-dotted border-gray-500 pb-3">
                                        <p className="text-gray-500 text-sm">Winings</p>
                                        <p className="text-blue-900">245</p>
                                        <p className="text-green-600">785</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-1 mb-3 border-b border-dotted border-gray-500 pb-3">
                                        <p className="text-gray-500 text-sm">Win(%)</p>
                                        <p className="text-blue-900">85</p>
                                        <p className="text-green-600">75</p>
                                    </div>

                                </div>
                                <div className="w-full border-b bg-white  rounded-sm shadow p-3 mb-3">
                                    <h5 className="mb-1 font-semibold text-gray-900">
                                        Leaderboard
                                    </h5>
                                    <p className="text-gray-500">On 8th March 2023 Sunil Singh Rawat rank is</p>
                                    <h3 className="text-primary">31,45,689</h3>
                                    <p> Ahead of 65% users  </p>


                                </div>

                                <div className="w-full border-b bg-white  rounded-sm shadow p-3 mb-3">
                                    <h5 className="mb-1 font-semibold text-gray-900">
                                        Since
                                    </h5>
                                    <p className="text-gray-500 text-sm">Sunil Singh Rawat is using gyanok from</p>
                                    <h3 className="text-primary">21 March 2022</h3>


                                </div>



                                <div className="grid grid-cols-2 gap-3">

                                    <div className="w-full p-5 text-center bg-cyan-100 text-cyan-600 shadow-[3px_3px_0px] rounded-sm">
                                        <h5 className="mb-2 text-2xl font-bold text-cyan-900 ">123K</h5>
                                        <p>Competition Won</p>
                                    </div>

                                    <div className="w-full p-5 text-center bg-rose-100 text-rose-600 shadow-[3px_3px_0px] rounded-sm">
                                        <h5 className="mb-2 text-2xl font-bold text-rose-900 ">123K</h5>
                                        <p>Tournament Won</p>
                                    </div>


                                </div>

                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="activity_tab">
                                <blockquote className="p-5 mb-3 text-center bg-amber-100 border-x-4 border-amber-500 text-red-600 rounded-sm ">
                                    <AiFillLock className="w-12 h-12 mb-1" />
                                    <h5 className="mb-2 font-semibold">Follow profile to view stats</h5>
                                    <p className="font-medium  ">You can view their stats, recent games and activity</p>
                                </blockquote>
                                <div className="w-full bg-white  rounded-sm shadow p-3 mb-5">


                                    <div className="mb-3">
                                        <h5 className="text-lg mb-1">March 2023</h5>
                                        <ul className="relative border-l-2 border-blue-500 bg-blue-50 ml-1">
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 March 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                                            </li>
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 March 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                            </li>
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 March 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mb-3">
                                        <h5 className="text-lg mb-1">April 2023</h5>
                                        <ul className="relative border-l-2 border-blue-500 bg-blue-50 ml-1">
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 April 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                                            </li>
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 April 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                                            </li>
                                            <li className="ml-4 py-3">
                                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 left-[-7px] border border-white "></div>
                                                <time className="mb-1 text-sm font-normal text-blue-700 ">12 April 2022, 12:10 PM</time>
                                                <p className=" text-gray-900 font-semibold ">Marketing UI design in Figma</p>
                                                <p className="text-sm text-gray-500 ">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                                            </li>
                                        </ul>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                    {/* skeleton */}
                    <div className="h-8 bg-gray-300 rounded-sm mb-3 mr-3 w-32 inline-block animate-pulse "></div>
                    <div className="h-8 bg-gray-300 rounded-sm mb-3  w-32 inline-block animate-pulse "></div>

                    <div className="bg-white rounded-sm p-3 mb-3">
                        <div role="status" className="animate-pulse divide-y ">
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 py-3">
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                                <div className="h-6 bg-gray-300 rounded-sm w-full"></div>
                            </div>
                            


                           
                           
                        </div>
                    </div>
                    {/* skeleton */}

                </div>
            </section>

        </>
    )
}