import Head from "next/head"
import Link from "next/link";
import Image from "next/image";


import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";



export default function AdminPlayLiveShow() {


    return (
        <>
            <Head>
                <title>Admin Play Live Show | By Gyanok</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Admin Play Live Show | By Gyanok" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Admin Play Live Show | By Gyanok" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5">
                <div className="container">
                        <div className="space-x-2 mb-3">
                            <Link href="/live-show" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                            <MdArrowBackIosNew className="w-4 h-4" />
                            </Link>
                            <h4 className="inline-flex text-lg text-white">Back</h4>
                        </div>
                    <div className="w-full">
                        <div className=" mb-5 ">
                            <div className="rounded-sm  bg-[#010a3a] p-3 flex justify-between">

                                <div className="">
                                    <h4 className="text-white drop-shadow-sm mb-0"> Live Show</h4>

                                    <h5 className="text-yellow-300 mb-3">Prize Pool: ₹1000</h5>
                                    <p className="text-slate-300"><u>Title:</u>   Independence Day Special</p>
                                    <p className="text-slate-300"><u>Entry Fee:</u>  ₹150</p>
                                </div>

                                <div>
                                <button type="button" className="text-gray-300 border border-gray-300 hover:bg-white hover:text-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-300  font-medium rounded-sm text-sm px-3 py-1 text-center whitespace-nowrap">End Quiz</button>

                                </div>


                            </div>
                        </div>
                        <div className="bg-[#010a3a]   lg:p-5 p-3 shadow-lg border-t rounded-sm mb-5">

                            <div >
                                <h5 className="mb-3 text-white lg:text-lg text-base">1. Which of these is a purpose of shared organisational values?</h5>
                                <div className="flex justify-between bg-white py-2 px-3 mb-3 rounded-sm items-center border-2 border-white ">
                                    <span className="text-sm lg:text-base">Build Team Support</span>
                                </div>
                                <div className="flex justify-between bg-white py-2 px-3 mb-3 rounded-sm items-center border-2 border-white ">
                                    <span className="text-sm lg:text-base">Influence marketing efforts</span>

                                </div>
                                <div className="flex justify-between bg-white py-2 px-3 mb-3 rounded-sm items-center border-2 border-white ">
                                    <span className="text-sm lg:text-base">Guide managers' decisions</span>
                                </div>
                                <div className="flex justify-between bg-green-100 py-2 px-3 mb-3 rounded-sm items-center border-2 border-green-600 text-green-600">
                                    <span className="text-sm lg:text-base">All of the above</span>
                                    <span><FaCheckCircle className="w-5 h-5 block" /></span>
                                </div>
                            </div>

                        </div>
                        <div className=" mb-5">
                            {/* <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300  font-medium rounded-sm p-3 text-center  ">End Quiz</button> */}
                            <button type="button" className="text-white bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-sm p-3 text-center w-full  ">Next Question <AiOutlineArrowRight/></button>
                        </div>

                        <div className="flow-root bg-[#ffffff1f] p-3 rounded-sm border border-gray-600">
                            <h6 className="text-slate-100 mb-3">50 User Playing the quiz</h6>
                            <ul role="list" className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <li className="bg-white p-2 outline outline-offset-1 outline-1  outline-gray-100 rounded-sm">
                                    <div className="flex items-center space-x-2">

                                        <div className="flex-shrink-0">
                                            <Image width={36} height={36} className="w-9 h-9 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" text-sm font-medium text-black truncate ">
                                                Himanshu Verma
                                            </p>
                                            <p className="text-xs  text-gray-500 truncate dark:text-gray-400">
                                                xxxxxxxx98
                                            </p>
                                        </div>
                                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                            <span className="font-bold text-blue-600 ">1</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="bg-white p-2 outline outline-offset-1 outline-1  outline-gray-100 rounded-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <Image width={36} height={36} className="w-9 h-9 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" text-sm font-medium text-black truncate ">
                                                Himanshu Verma
                                            </p>
                                            <p className="text-xs  text-gray-500 truncate dark:text-gray-400">
                                                xxxxxxxx98
                                            </p>
                                        </div>
                                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                            <span className="font-bold text-blue-600 ">2</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="bg-white p-2 outline outline-offset-1 outline-1  outline-gray-100 rounded-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <Image width={36} height={36} className="w-9 h-9 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" text-sm font-medium text-black truncate ">
                                                Himanshu Verma
                                            </p>
                                            <p className="text-xs  text-gray-500 truncate dark:text-gray-400">
                                                xxxxxxxx98
                                            </p>
                                        </div>
                                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                            <span className="font-bold text-blue-600 ">3</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="bg-white p-2 outline outline-offset-1 outline-1  outline-gray-100 rounded-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <Image width={36} height={36} className="w-9 h-9 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" text-sm font-medium text-black truncate ">
                                                Himanshu Verma
                                            </p>
                                            <p className="text-xs  text-gray-500 truncate dark:text-gray-400">
                                                xxxxxxxx98
                                            </p>
                                        </div>
                                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                            <span className="font-bold text-blue-600 ">4</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="bg-white p-2 outline outline-offset-1 outline-1  outline-gray-100 rounded-sm">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <Image width={36} height={36} className="w-9 h-9 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className=" text-sm font-medium text-black truncate ">
                                                Himanshu Verma
                                            </p>
                                            <p className="text-xs  text-gray-500 truncate dark:text-gray-400">
                                                xxxxxxxx98
                                            </p>
                                        </div>
                                        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                            <span className="font-bold text-blue-600 ">5</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}