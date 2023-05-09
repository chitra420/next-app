import { Tooltip } from "flowbite-react";
import Head from "next/head"
import Image from "next/image"
import { BsPlusCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import Layout from "../components/Layout";

export default function QuizLeaderboard() {


    return (
        <>

            <Head>
                <title>Top 100 Winner who have won cash prizes | GyanOK.com</title>
                <meta name="description" content="Check highest 100 winner names and their winnings. Participate in Daily and weekly quiz to earn money online and boost your knowledge. " />
                <meta name="keywords" content="leaderboard, top 100 winners, GyanOK winners" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Top 100 Winner who have won cash prizes | GyanOK.com" />
                <meta property="twitter:description" content="Check highest 100 winner names and their winnings. Participate in Daily and weekly quiz to earn money online and boost your knowledge." />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Top 100 Winner who have won cash prizes | GyanOK.com" />
                <meta property="og:description" content="Check highest 100 winner names and their winnings. Participate in Daily and weekly quiz to earn money online and boost your knowledge." />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <Layout>
                <section className="leaderboard-area section-area">
                    <div className="container">

                        <div className="ribbon">
                            <Image src={"/images/trophy.png"} alt={"trophy"} width={30} height={30}></Image>
                            <span>Leaderboard</span>
                            <Image src={"/images/trophy.png"} alt={"trophy"} width={30} height={30}></Image>
                        </div>

                        {/* skeleton start */}

                        <div className="skeleton">

                            <div className="border border-gray-200 rounded-sm mb-3">
                                <div role="status" className=" animate-pulse">
                                    <div className="p-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-1">
                                        <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                            <div className=" space-y-2">
                                                <div className="w-36 h-3 bg-gray-200 rounded-sm"></div>
                                                <div className="w-24 h-2 bg-gray-200 rounded-sm mb-2"></div>
                                                
                                                <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
                                            </div>
                                        </div>

                                        <div className="h-6 bg-gray-300 rounded-lg w-16"></div>

                                    </div>

                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-sm mb-3">
                                <div role="status" className=" animate-pulse">
                                    <div className="p-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-1">
                                        <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                            <div className=" space-y-2">
                                                <div className="w-36 h-3 bg-gray-200 rounded-sm"></div>
                                                <div className="w-24 h-2 bg-gray-200 rounded-sm mb-2"></div>
                                                
                                                <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
                                            </div>
                                        </div>

                                        <div className="h-6 bg-gray-300 rounded-lg w-16"></div>

                                    </div>

                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-sm mb-3">
                                <div role="status" className=" animate-pulse">
                                    <div className="p-3 flex justify-between items-center">
                                        <div className="flex items-center space-x-1">
                                        <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                            <div className=" space-y-2">
                                                <div className="w-36 h-3 bg-gray-200 rounded-sm"></div>
                                                <div className="w-24 h-2 bg-gray-200 rounded-sm mb-2"></div>
                                                
                                                <div className="w-12 h-3 bg-gray-200 rounded-sm"></div>
                                            </div>
                                        </div>

                                        <div className="h-6 bg-gray-300 rounded-lg w-16"></div>

                                    </div>

                                </div>
                            </div>

                        
                        </div>



                        {/* skeleton end */}



                        <div className="group flex justify-between items-center flex-nowrap mb-3 p-2  rounded-sm  bg-gradient-to-r from-[#ffffff]  to-[#fff1ba] drop-shadow">
                            <div className="left">
                                <div className="group flex justify-between items-center flex-nowrap  space-x-3">
                                    <div className="shrink-0 relative">
                                        <Image src="/images/boy.png" width={60} height={60} alt="user" className="w-[60px] h-[60px] rounded-full border-2 p-0.5 border-yellow-500" />


                                        <Image src="/images/aone.png" width={30} height={30} alt="user" className="absolute  bottom-[-20px] right-[-8px]   rounded-full" />
                                    </div>
                                    <div className="right2 whitespace-nowrap">

                                        <h6 className="text-yellow-600">Himanshu Verma</h6>

                                        <span className="text-sm text-yellow-400">xxxxx9870</span>
                                        <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-1 px-3 bg-[#ffc10738] rounded-lg">

                                <h6 className="text-yellow-600">₹11125.25</h6>
                            </div>
                        </div>

                        <div className="group flex justify-between items-center flex-nowrap mb-3 p-2  rounded-sm  bg-gradient-to-r from-[#ffffff] to-[#dddddd] drop-shadow">
                            <div className="left">
                                <div className="group flex justify-between items-center flex-nowrap  space-x-3">
                                    <div className="shrink-0 relative">
                                        <Image src="/images/boy.png" width={60} height={60} alt="user" className="w-[60px] h-[60px] rounded-full border-2 p-0.5 border-slate-500" />


                                        <Image src="/images/atwo.png" width={30} height={30} alt="user" className="absolute  bottom-[-20px] right-[-8px]   rounded-full" />
                                    </div>
                                    <div className="right2 whitespace-nowrap">
                                        <h6 className="text-slate-900">Rohit Dobriyal</h6>
                                        <span className="text-sm text-slate-400">xxxxx9870</span>
                                        <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-1 px-3 bg-slate-100 rounded-lg">

                                <h6 className="text-slate-600">₹11125.25</h6>
                            </div>
                        </div>



                        <div className="group flex justify-between items-center flex-nowrap mb-3 p-2  rounded-sm  bg-gradient-to-r from-[#ffffff]  to-[#f29697] drop-shadow">
                            <div className="left">
                                <div className="group flex justify-between items-center flex-nowrap  space-x-3">
                                    <div className="shrink-0 relative">
                                        <Image src="/images/boy.png" width={60} height={60} alt="user" className="rounded-full border-2 p-0.5 border-rose-500" />


                                        <Image src="/images/athree.png" width={30} height={30} alt="user" className="absolute  bottom-[-20px] right-[-8px]   rounded-full" />
                                    </div>
                                    <div className="right2 whitespace-nowrap">
                                        <h6 className="text-rose-900">Himanshu Verma</h6>
                                        <span className="text-sm text-rose-400">xxxxx9870</span>
                                        <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-1 px-3 bg-rose-100 rounded-lg">

                                <h6 className="text-rose-600">₹11125.25</h6>
                            </div>
                        </div>

                        <div className="leaderboard-card ">
                            <div className="group flex justify-between items-center flex-nowrap mb-2 p-3  rounded-sm bg-[#010a3a] drop-shadow">
                                <div className="left">
                                    <div className="content flex items-center space-x-4">
                                        <div className="shrink-0 relative">
                                            <Image src="/images/boy.png" width={56} height={56} alt="user" className="w-[56px] h-[56px] rounded-full border-2 p-0.5 border-blue-500" />
                                            <span className="absolute text-center leading-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bottom-[-12px] right-[-8px] transform -translate-y-1/2 w-6 h-6  rounded-full">4</span>
                                        </div>
                                        <div className="right2 whitespace-nowrap">
                                            <h6 className="text-white ">Himanshu Verma</h6>
                                            <span className="text-sm text-yellow-100">xxxxx9870</span>
                                            <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-1 px-3 bg-[#ffc10738] rounded-lg">

                                    <h6 className="text-yellow-300">₹11125.25</h6>
                                </div>
                            </div>
                            <div className="group flex justify-between items-center flex-nowrap mb-2 p-3  rounded-sm bg-[#010a3a] drop-shadow">
                                <div className="left">
                                    <div className="content flex items-center space-x-4">
                                        <div className="shrink-0 relative">
                                            <Image src="/images/boy.png" width={56} height={56} alt="user" className="rounded-full border-2 p-0.5 border-blue-500" />
                                            <span className="absolute text-center leading-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bottom-[-12px] right-[-8px] transform -translate-y-1/2 w-6 h-6  rounded-full">5</span>
                                        </div>
                                        <div className="right2 whitespace-nowrap">
                                            <h6 className="text-white ">Sunil Singh Rawat</h6>
                                            <span className="text-sm text-yellow-100">xxxxx9870</span>
                                            <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center py-1 px-3 bg-[#ffc10738] rounded-lg">

                                    <h6 className="text-yellow-300">₹1025.25</h6>
                                </div>
                            </div>
                            <div className="group flex justify-between items-center flex-nowrap mb-2 p-3  rounded-sm bg-[#010a3a] drop-shadow">
                                <div className="left">
                                    <div className="content flex items-center space-x-4">
                                        <div className="shrink-0 relative">
                                            <Image src="/images/boy.png" width={56} height={56} alt="user" className="rounded-full border-2 p-0.5 border-blue-500" />
                                            <span className="absolute text-center leading-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bottom-[-12px] right-[-8px] transform -translate-y-1/2 w-6 h-6  rounded-full">6</span>
                                        </div>
                                        <div className="right2 whitespace-nowrap">
                                            <h6 className="text-white ">Sunil Singh Rawat</h6>
                                            <span className="text-sm text-yellow-100">xxxxx9870</span>
                                            <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-1 px-3 bg-[#ffc10738] rounded-lg">

                                    <h6 className="text-yellow-300">₹1025.25</h6>
                                </div>
                            </div>
                            <div className="group flex justify-between items-center flex-nowrap mb-2 p-3  rounded-sm bg-[#010a3a] drop-shadow">
                                <div className="left">
                                    <div className="content flex items-center space-x-4">
                                        <div className="shrink-0 relative">
                                            <Image src="/images/boy.png" width={56} height={56} alt="user" className="rounded-full border-2 p-0.5 border-blue-500" />
                                            <span className="absolute text-center leading-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bottom-[-12px] right-[-8px] transform -translate-y-1/2 w-6 h-6  rounded-full">7</span>
                                        </div>
                                        <div className="right2 whitespace-nowrap">
                                            <h6 className="text-white ">Sunil Singh Rawat</h6>
                                            <span className="text-sm text-yellow-100">xxxxx9870</span>
                                            <span className="bg-blue-100 w-fit block cursor-pointer text-blue-800 text-[10px] font-medium mr-2 px-2  rounded-sm  border border-blue-500 mt-1 ">Follow</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center py-1 px-3 bg-[#ffc10738] rounded-lg">

                                    <h6 className="text-yellow-300">₹1025.25</h6>
                                </div>
                            </div>



                        </div>



                    </div>
                </section>
            </Layout>



        </>
    )
}